<script>
    import { subsystemList, subsystemToTest } from '../stores/test.config.js'

    function handleSubsystemClick(subsystem) {
        $subsystemToTest[subsystem] = !$subsystemToTest[subsystem]
    }
</script>

{#each $subsystemList as subsystem}
    <div class="subsys-holder" on:click={() => handleSubsystemClick(subsystem)}>
        <div class="selector" class:selected={$subsystemToTest[subsystem]} />
        <div class="subsystem">{subsystem.toUpperCase()}</div>
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
