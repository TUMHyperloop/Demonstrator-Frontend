<script>
    import { onDestroy, onMount } from 'svelte'
    import svgCompleted from '../assets/timeline-completed.svg'
    import SubsystemSplitter from './SubsystemSplitter.svelte'
    import SubsystemSteps from './SubsystemSteps.svelte'
    import SensorField from './SensorField.svelte'
    import {
        propulsionMappings, 
        propulsionTc
    } from '../stores/tcObjects.js'
    import { readSensorValues, writeValues } from '../stores/apiReadingCom.js'

    let interval = null

    onMount(async () => {
        // Start reading sensors continously, set up interval
        interval = setInterval(async () => {
            let resp = await readSensorValues(Object.keys($propulsionTc))
            if ((resp.success = true)) {
                $propulsionTc = resp.data
            }

            // TODO: Remove this, just for testing
            clearInterval(interval)
        }, 1000)
    })

    onDestroy(() => {
        clearInterval(interval)
    })
</script>

<SubsystemSplitter subsystemName="Propulsion Control" />
<div class="sensor-holder">
    <div class="sensor-box">
        {#each Object.keys($propulsionTc) as tcVariable}
            <SensorField
                sensorName={$propulsionMappings[tcVariable]}
                sensorValue={$propulsionTc[tcVariable]}
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
