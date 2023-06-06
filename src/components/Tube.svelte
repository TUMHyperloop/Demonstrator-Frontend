<script>
    import { onDestroy, onMount } from 'svelte'
    import Button from './Button.svelte'
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
    import { each } from 'svelte/internal'

    let controlsWidth = 'fit-content'
    let controlsElement = null
    $: console.log(controlsWidth)

    let interval = null

    onMount(async () => {
        if (
            controlsWidth == 'fit-content' ||
            controlsElement.offsetWidth > controlsWidth
        ) {
            controlsWidth = controlsElement.offsetWidth
        }

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
<SubsystemSplitter subsystemName="Propulsion" />

<SubsystemSplitter subsystemName="Levitation & Guidance" />
<SubsystemSplitter subsystemName="Tube Control" />

<div class="first-row">
    <div class="configs">
        {#each Object.keys($buttonsTc).slice(0, 2) as tcVariable}
            <Button
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>

    <div class="state-change">
        {#each Object.keys($buttonsTc).slice(2, 6) as tcVariable}
            <Button
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>
</div>

<div class="controls-wrapper">
    <div class="controls">
        {#each Object.keys($buttonsTc).slice(6, 8) as tcVariable}
            <Button
                bind:this={controlsElement}
                width="{controlsWidth}px"
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>

    <div class="controls">
        {#each Object.keys($buttonsTc).slice(8, 10) as tcVariable}
            <Button
                bind:this={controlsElement}
                width="{controlsWidth}px"
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>

    <input
        type="number"
        placeholder="Target pressure"
        value={$buttonsTc['tcTargetPressure']}
    />
</div>

<style>
    .configs {
        display: flex;
    }
    .state-change {
        display: flex;
        justify-content: space-between;
        margin-right: 15px;
    }
    .first-row {
        display: flex;
        justify-content: space-between;
    }

    .controls {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        width: fit-content;
    }
    .controls-wrapper {
        display: flex;
        align-items: flex-end;
    }

    input {
        font-family: 'Poppins';
        font-weight: 400;
        color: white;
        background-color: #212121;
        outline: 3px solid white;
        border-radius: 2px;
        font-size: 23px;
        letter-spacing: 0.025rem;
        margin: 20px 0 0 15px;
        padding: 0 10px;

        display: flex;
        align-items: center;
        justify-content: start;
        min-width: fit-content;
        height: fit-content;
    }
    input:focus,
    input:active {
        outline: 3px solid white !important;
    }
    .sensor-holder {
        display: flex;
        flex-direction: row;
    }
</style>
