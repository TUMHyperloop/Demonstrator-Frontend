<script>
    // @ts-ignore
    import Plotly from 'plotly.js-dist-min'
    import { readSensorValues } from '../stores/apiReadingCom'

    import { onDestroy, onMount } from 'svelte'

    import { levitationTc } from '../stores/plotStore.js'

    let interval = null

    onMount(async () => {
        let chartId = 'my-plot'

        var time = new Date()

        var data = [
            {
                x: [time],
                y: [0],
                mode: 'lines',
                name: 'Actual Voltage (V)',
                line: { color: '#ff218c' },
            },
            {
                x: [time],
                y: [0],
                name: 'Actual Current (A)',
                mode: 'lines',
                line: { color: '#ffd800' },
            },
            {
                x: [time],
                y: [0],
                name: 'Actual Power (W)',
                mode: 'lines',
                line: { color: '#21b1ff' },
            },
        ]

        var layout = {
            title: 'Levitation',
            paper_bgcolor: '#212121',
            plot_bgcolor: '#212121',

            font: {
                color: '#FFFFFF',
                family: 'Outfit',
                size: 12,
            },
        }

        Plotly.newPlot(chartId, data, layout)

        // Start reading sensors continously, set up interval
        interval = setInterval(async () => {
            let resp = await readSensorValues(Object.keys($levitationTc))
            if ((resp.success = true)) {
                $levitationTc = resp.data
            }

            let voltageLimit =
                $levitationTc[
                    'GUI_OUTPUT.LevNGuideData.Heinzinger_VoltageLimit'
                ]
            let currentLimit =
                $levitationTc[
                    'GUI_OUTPUT.LevNGuideData.Heinzinger_CurrentLimit'
                ]
            let powerLimit =
                $levitationTc['GUI_OUTPUT.LevNGuideData.Heinzinger_PowerLimit']
            let actualVoltage =
                $levitationTc[
                    'GUI_OUTPUT.LevNGuideData.Heinzinger_ActualVoltage'
                ]
            let actualCurrent =
                $levitationTc[
                    'GUI_OUTPUT.LevNGuideData.Heinzinger_ActualCurrent'
                ]
            let actualPower =
                $levitationTc['GUI_OUTPUT.LevNGuideData.Heinzinger_ActualPower']

            // set data on the plotly chart
            var time = new Date()
            var update = {
                x: [[time], [time], [time]],
                y: [[actualVoltage], [actualCurrent], [actualPower]],
            }

            var olderTime = time.setMinutes(time.getMinutes() - 1)
            var futureTime = time.setMinutes(time.getMinutes() + 1)

            // Define the horizontal line (shape)
            var horizontalLine1 = {
                type: 'line',
                xref: 'paper', // Refers to the entire plotting area (from 0 to 1)
                x0: 0, // start of line on x-axis
                y0: voltageLimit, // the constant y value
                x1: 1, // end of line on x-axis
                y1: voltageLimit, // the constant y value
                line: {
                    color: '#ff218c',
                    width: 2,
                    dash: 'dot',
                },
            }
            var horizontalLine2 = {
                type: 'line',
                xref: 'paper', // Refers to the entire plotting area (from 0 to 1)
                x0: 0, // start of line on x-axis
                y0: currentLimit, // the constant y value
                x1: 1, // end of line on x-axis
                y1: currentLimit, // the constant y value
                line: {
                    color: '#ffd800',
                    width: 2,
                    dash: 'dot',
                },
            }
            var horizontalLine3 = {
                type: 'line',
                xref: 'paper', // Refers to the entire plotting area (from 0 to 1)
                x0: 0, // start of line on x-axis
                y0: powerLimit, // the constant y value
                x1: 1, // end of line on x-axis
                y1: powerLimit, // the constant y value
                line: {
                    color: '#21b1ff',
                    width: 2,
                    dash: 'dot',
                },
            }

            var minuteView = {
                xaxis: {
                    type: 'date',
                    range: [olderTime, futureTime],
                },

                shapes: [horizontalLine1, horizontalLine2, horizontalLine3],
            }

            Plotly.relayout(chartId, minuteView)
            Plotly.extendTraces(chartId, update, [0, 1, 2])

            // TODO: Remove this, just for testing
            // clearInterval(interval)
        }, 1000)
    })

    onDestroy(() => {
        clearInterval(interval)
    })
</script>

<div id="my-plot" />

<style>
    #my-plot {
        width: 1000px;
        height: 700px;
        z-index: -1;
        margin-left: 20px;
    }
</style>
