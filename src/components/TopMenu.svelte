<script>
    import logo from '../assets/logo.svg'
    import notification from '../assets/notification.svg'

    import { subsystemList, subsystemNotification } from '../stores/test.config'
    import { createEventDispatcher } from 'svelte'

    // Get the selected tab to highlight
    export let selectedSubsystem

    // Create event dispatcher
    const dispatch = createEventDispatcher()

    // Trigger when user clicks on a subsystem tab
    function clickSubsystemTab(subsystemName) {
        // Dispatch event to parent, new selected subsystem
        dispatch('subsystemSelected', subsystemName)
    }
</script>

<div class="top-menu">
    <div class="header">
        <img src={logo} alt="" />
        <p>Demonstrator</p>
    </div>
    <div class="main">
        {#each $subsystemList as subsystem}
            <div
                class="tab"
                class:selected={subsystem === selectedSubsystem}
                on:click={() => clickSubsystemTab(subsystem)}
            >
                <!-- Show ! icon if there is notification, next to subclass tab  -->
                {#if $subsystemNotification[subsystem]}
                    <img src={notification} alt="" />
                {/if}

                <!-- Capitalize first letter of subsystem name -->
                <p>{subsystem[0].toUpperCase() + subsystem.substring(1)}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    .top-menu {
        height: 100%;
        width: 100%;
        background-color: #424242;
        display: flex;
        position: relative;
        color: white;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 246px;
        cursor: pointer;
    }
    .header p {
        margin-left: 10px;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 500;
    }
    .main {
        display: flex;
    }
    .tab {
        height: 100%;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-size: 16px;
        cursor: pointer;
    }
    .tab img {
        margin-right: 15px;
    }
    .selected {
        background-color: #212121;
    }
    .tab:not(.selected):hover {
        background-color: #575757;
    }
</style>
