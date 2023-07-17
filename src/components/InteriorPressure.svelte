<script>
    // @ts-ignore
    import Plotly from 'plotly.js-dist-min'
    import { readSensorValues } from '../stores/apiReadingCom'

    import { onDestroy, onMount } from 'svelte'

    import { pressureTc } from '../stores/plotStore.js'

    let interval = null

    onMount(async () => {
        let chartId = 'pressure-plot'

        var time = new Date()

        var data = [
            {
                x: [time],
                y: [0],
                name: 'Interior Pressure (mbar)',
                mode: 'lines',
                line: { color: '#ffd800' },
            },
            {
                x: [time],
                y: [0],
                name: 'Tube Pressure (mbar)',
                mode: 'lines',
                line: { color: '#21b1ff' },
            },
        ]

        var layout = {
            title: 'Pressure Data',
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
            let resp = await readSensorValues(Object.keys($pressureTc))
            if ((resp.success = true)) {
                $pressureTc = resp.data
            }

            let pressureLimit = 1000

            let interiorPressure =
                $pressureTc[
                    'GUI_OUTPUT.InteriorControlData.PressureSensor_Pressure'
                ]
            let tubePressure =
                $pressureTc[
                    'GUI_OUTPUT.VacuumControlData.PressureSensor_Pressure'
                ]

            // set data on the plotly chart
            var time = new Date()
            var update = {
                x: [[time], [time]],
                y: [[interiorPressure], [tubePressure]],
            }

            var olderTime = time.setMinutes(time.getMinutes() - 1)
            var futureTime = time.setMinutes(time.getMinutes() + 1)

            // Define the horizontal line (shape)
            var horizontalLine1 = {
                type: 'line',
                xref: 'paper', // Refers to the entire plotting area (from 0 to 1)
                x0: 0, // start of line on x-axis
                y0: pressureLimit, // the constant y value
                x1: 1, // end of line on x-axis
                y1: pressureLimit, // the constant y value
                line: {
                    color: '#ffd800',
                    width: 2,
                    dash: 'dot',
                },
            }

            var minuteView = {
                xaxis: {
                    type: 'date',
                    range: [olderTime, futureTime],
                },

                shapes: [horizontalLine1],
            }

            Plotly.relayout(chartId, minuteView)
            Plotly.extendTraces(chartId, update, [0, 1])

            // TODO: Remove this, just for testing
            // clearInterval(interval)
        }, 1000)
    })

    onDestroy(() => {
        clearInterval(interval)
    })
</script>

<div id="pressure-plot" />

<style>
    #pressure-plot {
        width: 1000px;
        height: 700px;
        z-index: -1;
        margin-left: 20px;
    }
</style>
