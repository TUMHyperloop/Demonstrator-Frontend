<script>
    import { onMount } from 'svelte'
    export let subsystemName = 'Subsystem Name'
    import { subsystemConfig, saveSubsystemConfig } from '../stores/test.vars'

    function addVar() {
        let newVar = {
            name: '',
            value: '',
        }

        $subsystemConfig[subsystemName] = [
            ...$subsystemConfig[subsystemName],
            newVar,
        ]
        saveSubsystemConfig(subsystemName)
    }

    function removeElem(index) {
        $subsystemConfig[subsystemName] = $subsystemConfig[
            subsystemName
        ].filter((_, idx) => idx !== index)

        saveSubsystemConfig(subsystemName)
    }

    function sendToPlc() {
        console.log('Send to PLC')
    }

    function sendAllToPlc() {
        console.log('Send all to PLC')
    }
</script>

{#each $subsystemConfig[subsystemName] as item, idx}
    <div>
        <input
            class="var-name"
            type="text"
            placeholder="Variable name"
            bind:value={item.name}
            on:change={() => {
                saveSubsystemConfig(subsystemName)
            }}
        />
        <input
            class="var-value"
            type="text"
            placeholder="Variable value"
            bind:value={item.value}
            on:change={() => {
                saveSubsystemConfig(subsystemName)
            }}
        />
        <button class="remove-elem" on:click={() => removeElem(idx)}
            >Remove</button
        >
        <button class="send-to-backend"> Send to PLC </button>
    </div>
{/each}

<div>
    <button on:click={addVar} class="add-var">Add new var</button>
    <button class="send-all">Send all to PLC</button>
</div>

<style>
    .var-name,
    .var-value {
        font-family: 'Poppins';
        font-weight: 500;
        color: white;
        background-color: #212121;
        outline: 4px solid white;
        border-radius: 10px 0px 0px 10px;
        font-size: 23px;
        letter-spacing: -0.025rem;
        margin: 20px 0 0 15px;
        border: none;
        padding: 0 10px;
    }
    .var-name:focus,
    .var-value:focus {
        outline: 4px solid white !important;
    }
    .var-value {
        border-radius: 0px 0px 0px 0px;
    }

    .send-to-backend,
    .add-var,
    .remove-elem,
    .send-all {
        font-family: 'Poppins';
        font-weight: 500;
        color: white;
        background-color: white;
        color: #212121;
        font-size: 23px;
        letter-spacing: -0.025rem;
        margin: 15px 0 0 10px;
        border: none;
        cursor: pointer;
        height: 40px;
        padding: 0 10px;
        border-radius: 0px 10px 10px 0px;
    }
    .remove-elem {
        border-radius: 0px 0px 0px 0px;
    }
    .add-var {
        border-radius: 10px 0px 0px 10px;
    }
</style>
