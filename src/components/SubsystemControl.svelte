<script>
    import infoSvg from '../assets/info.svg'
    import { subsystemToTest } from '../stores/test.config'
    export let testInProgress = false
    export let subsystemName = 'Subsystem Name'

    function toggleSubsystemToTest() {
        $subsystemToTest[subsystemName] = !$subsystemToTest[subsystemName]
    }
</script>

{#if testInProgress}
    <div class="in-progress">
        <img src={infoSvg} alt="" />
        <h1>{subsystemName.toUpperCase()} TEST IN PROGRESS...</h1>
    </div>
{:else if $subsystemToTest[subsystemName] == false}
    <div class="start-new">
        <h1>ADD {subsystemName.toUpperCase()} TO NEXT TEST</h1>
        <button on:click={toggleSubsystemToTest}>ADD</button>
    </div>
{:else if $subsystemToTest[subsystemName] == true}
    <div class="start-new">
        <h1>{subsystemName.toUpperCase()} IS SCHEDULED FOR TESTING</h1>
        <button on:click={toggleSubsystemToTest}>REMOVE</button>
    </div>
{/if}

<style>
    h1 {
        font-family: 'Poppins';
        font-weight: 500;
        color: white;
        font-size: 23px;
        letter-spacing: -0.075rem;
    }
    button {
        height: 38px;
        padding: 0 20px;
        border-radius: 0px 5px 5px 0px;
        background-color: white;
        font-family: 'Poppins';
        font-size: 21px;
        font-weight: 500;
        letter-spacing: 0.035rem;
        cursor: pointer;
    }
    .in-progress {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .start-new > h1 {
        margin: 5px 0 0 10px;
    }
    .start-new > button {
        margin: 5px 0 0 13px;
    }
</style>
