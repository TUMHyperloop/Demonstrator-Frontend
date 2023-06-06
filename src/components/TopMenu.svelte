<script>
    import logo from '../assets/logo.svg'
    import notification from '../assets/notification.svg'
    import { createEventDispatcher, onMount } from 'svelte'
    import completedSvg from '../assets/timeline-completed.svg'
    import errorSvg from '../assets/timeline-error.svg'

    // Get the selected tab to highlight
    export let selectedSubsystem

    let subsystemList = ['tube', 'vacuum', 'propulsion', 'levitation', 'interior']

    // Create event dispatcher
    const dispatch = createEventDispatcher()

    // Trigger when user clicks on a subsystem tab
    function clickSubsystemTab(subsystemName) {
        // Dispatch event to parent, new selected subsystem
        dispatch('subsystemSelected', subsystemName)
    }

    let isConnected = false
    async function connectToPlc() {
        // check if connection is already established
        let resp = await fetch('http://localhost:3000/api/isConnected')
        let data = await resp.json()
        isConnected = data.success

        if (isConnected) {
            return
        }

        await fetch('http://localhost:3000/api/connect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    onMount(async () => {

    })
</script>

<div class="top-menu">
    <div class="header">
        <img src={logo} alt="" />
        <p>Demonstrator</p>
    </div>
    <div class="main">
        {#each subsystemList as subsystem}
            <div
                class="tab"
                class:selected={subsystem === selectedSubsystem}
                on:click={() => clickSubsystemTab(subsystem)}
            >
                <!-- Capitalize first letter of subsystem name -->
                <p>{subsystem[0].toUpperCase() + subsystem.substring(1)}</p>
            </div>
        {/each}

        <div
            class="tab"
            on:click={() => connectToPlc()}
        >
            <img src={isConnected ? completedSvg : errorSvg} alt="" />
            <!-- Capitalize first letter of subsystem name -->
            <p>{isConnected ? 'Connected to PLC' : 'Connect to PLC'}</p>
        </div>
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
        justify-content: space-between;
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
