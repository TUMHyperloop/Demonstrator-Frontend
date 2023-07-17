<script>
    import { onDestroy, onMount } from 'svelte'
    import svgCompleted from '../assets/timeline-completed.svg'
    import SubsystemSplitter from './SubsystemSplitter.svelte'
    import SubsystemSteps from './SubsystemSteps.svelte'
    import SensorField from './SensorField.svelte'
    import {
        vacuumSensors,
        vacuumMappings,
        buttonsTc,
        buttonsTcMappings,
    } from '../stores/tcObjects.js'
    import { readSensorValues, writeValues } from '../stores/apiReadingCom.js'

    let interval = null

    onMount(async () => {
        // Start reading sensors continously, set up interval
        interval = setInterval(async () => {
            let vacuumResp = await readSensorValues(Object.keys($vacuumSensors))
            if ((vacuumResp.success = true)) {
                $vacuumSensors = vacuumResp.data
            }

            // TODO: Remove this, just for testing
            clearInterval(interval)
        }, 1000)
    })

    onDestroy(() => {
        clearInterval(interval)
    })
</script>

<SubsystemSplitter subsystemName="Vacuum Control" />
<div class="sensor-holder">
    <div class="sensor-box">
        {#each Object.keys($vacuumSensors) as tcVariable}
            <SensorField
                sensorName={$vacuumMappings[tcVariable]}
                sensorValue={$vacuumSensors[tcVariable]}
            />
        {/each}
    </div>
</div>
<SubsystemSplitter subsystemName="Main Controls" />



<style>

    .sensor-holder {
        display: flex;
        flex-direction: row;
    }
</style>
