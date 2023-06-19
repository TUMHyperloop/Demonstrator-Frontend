<script>

    import SideMenuTitle from './SideMenuTitle.svelte'
    import RightSubsystem from './RightSubsystem.svelte'

    import { onDestroy, onMount } from 'svelte'
    import {activationStatusTc} from '../stores/tcObjects'
    import { readSensorValues } from '../stores/apiReadingCom'

    let interval = null

    $: activationValues = Object.values($activationStatusTc);

onMount(async () => {
    // Start reading sensors continously, set up interval
    interval = setInterval(async () => {
        let vacuumResp = await readSensorValues(Object.keys($activationStatusTc))
        if ((vacuumResp.success = true)) {
            $activationStatusTc = vacuumResp.data
        }

        // TODO: Remove this, just for testing
        clearInterval(interval)
    }, 1000)
})

</script>

<div class="wrapper">
    <div class="content">
        <div class="timeline">
            <div class="main-distancer" />
            <h1>STATUS:</h1>
        </div>
        <RightSubsystem subsystemName="Levitation Control" subsystemValues={[activationValues[0], activationValues[1]]}/>
        <RightSubsystem subsystemName="Interior" subsystemValues={[activationValues[2], activationValues[3]]}  />
        <RightSubsystem subsystemName="Propulsion Control" subsystemValues={[activationValues[4], activationValues[5]]}/>
        <RightSubsystem subsystemName="Tube Control" subsystemValues={[activationValues[6], activationValues[7]]} />
        <RightSubsystem subsystemName="Vacuum Control"subsystemValues={[activationValues[8], activationValues[9]]} />
    </div>

    <SideMenuTitle title="wizard" />
</div>

<style>
    .wrapper {
        height: 100%;
        width: 100%;
        position: relative;
        background-color: #303030;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .timeline {
        margin-top: 10px;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    .main-distancer {
        width: 16px;
        height: 1px;
        background-color: white;
        margin-left: 16px;
        margin-right: 12px;
    }
    .timeline h1 {
        font-weight: 300;
        font-family: 'Poppins';
        color: white;
        font-size: 20px;
        letter-spacing: 0.075em;
    }
</style>
