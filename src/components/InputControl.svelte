<script>
    import { onDestroy, onMount } from 'svelte'
    import { readSensorValues, writeValues } from '../stores/apiReadingCom.js'
    import { pressureButtonTc } from '../stores/tcObjects.js'

    let newPressure = ''

    function handleKeyDown(event) {
        console.log(event.key)
        if (event.key === 'Enter') {
            writeValues({ 'GUI_INPUT.lrTargetPressure': newPressure })
            newPressure = ''
        }
    }

    let interval = null

    onMount(async () => {
        // Start reading sensors continously, set up interval
        interval = setInterval(async () => {
            let resp = await readSensorValues(Object.keys($pressureButtonTc))
            if ((resp.success = true)) {
                $pressureButtonTc = resp.data
            }

            // TODO: Remove this, just for testing
            clearInterval(interval)
        }, 1000)
    })

    onDestroy(() => {
        clearInterval(interval)
    })
</script>

<div class="input-holder">
    <p>
        Current: {$pressureButtonTc['GUI_INPUT.lrTargetPressure']} mbar
    </p>
    <input
        type="number"
        placeholder="Set Pressure"
        bind:value={newPressure}
        on:keydown={handleKeyDown}
    />
</div>

<style>
    .input-holder {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
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
        width: 150px;

        display: flex;
        align-items: center;
        justify-content: start;
        height: fit-content;
    }
    p {
        color: white;
        font-size: 18px;
        margin-left: 7px;
        font-family: 'Poppins';
        position: relative;
        top: 10px;
        left: 8px;
    }
    input:focus,
    input:active {
        outline: 3px solid white !important;
    }
</style>
