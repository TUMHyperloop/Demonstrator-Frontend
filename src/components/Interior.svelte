<script>
    import { onDestroy, onMount } from 'svelte'
    import svgCompleted from '../assets/timeline-completed.svg'
    import SubsystemSplitter from './SubsystemSplitter.svelte'
    import SubsystemSteps from './SubsystemSteps.svelte'
    import SensorField from './SensorField.svelte'
    import {
        interiorMappings, 
        interiorTc
    } from '../stores/tcObjects.js'
    import { readSensorValues, writeValues } from '../stores/apiReadingCom.js'

    let interval = null

    onMount(async () => {
        // Start reading sensors continously, set up interval
        interval = setInterval(async () => {
            let interiorResp = await readSensorValues(Object.keys($interiorTc))
            if ((interiorResp.success = true)) {
                console.log(interiorResp)
                $interiorTc = interiorResp.data
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
        {#each Object.keys($interiorTc) as tcVariable}
            <SensorField
                sensorName={$interiorMappings[tcVariable]}
                sensorValue={$interiorTc[tcVariable]}
            />
        {/each}
    </div>
</div>
<SubsystemSplitter subsystemName="Propulsion" />

<SubsystemSplitter subsystemName="Levitation & Guidance" />
<SubsystemSplitter subsystemName="Tube Control" />



<style>

    .sensor-holder {
        display: flex;
        flex-direction: row;
    }
</style>
