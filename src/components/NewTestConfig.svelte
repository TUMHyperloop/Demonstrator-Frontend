<script>
    import { readSensorValues, writeValues } from "../stores/apiReadingCom"
    import { onDestroy, onMount } from "svelte"
    import {subsystemsTc, subsystemsTcMappings} from "../stores/tcObjects"


    let interval = null

    onMount(async () => {
        // Start reading sensors continously, set up interval
        interval = setInterval(async () => {
            let resp = await readSensorValues(Object.keys($subsystemsTc))
            if ((resp.success = true)) {
                $subsystemsTc = resp.data
            }

            // TODO: Remove this, just for testing
            // clearInterval(interval)
        }, 1000)
    })

    onDestroy(() => {
        clearInterval(interval)
    })

    function handleSubsystemClick(subsystem) {
        console.log("Clicked subsystem: " + subsystem)

        let oldObj = $subsystemsTc

        // Change value of subsystem to true
        oldObj[subsystem] = !oldObj[subsystem]

        // write to backend 
        writeValues(oldObj)
    }
</script>

{#each Object.keys($subsystemsTc) as subsystemTcVar}
    <div class="subsys-holder" on:click={() => handleSubsystemClick(subsystemTcVar)}>
        <div class="selector" class:selected={$subsystemsTc[subsystemTcVar]} />
        <div class="subsystem">{($subsystemsTcMappings[subsystemTcVar]).toUpperCase()}</div>
    </div>
{/each}

<style>
    .subsys-holder {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 25px;
        margin-top: 10px;
        cursor: pointer;
    }
    .subsys-holder:first {
        margin-top: 10px;
    }
    .selector {
        border: 2px solid white;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        margin-right: 8px;
    }
    .subsystem {
        font-family: 'Poppins';
        font-size: 18px;
        font-weight: 200;
        letter-spacing: 0.075em;
        color: white;
        margin-left: 5px;
    }
    .selected {
        background-color: white;
    }
</style>
