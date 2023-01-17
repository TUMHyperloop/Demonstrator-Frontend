<script>
    import SideMenuTitle from './SideMenuTitle.svelte'
    import RightSubsystem from './RightSubsystem.svelte'
</script>

<div class="wrapper">
    <div class="content">
        <div class="timeline">
            <div class="main-distancer" />
            <h1>UP NEXT:</h1>
        </div>
        <RightSubsystem
            subsystemName="Tube Control"
            actions={['Confirm Operational', 'Close Door']}
        />
        <RightSubsystem
            subsystemName="Vacuum Control"
            actions={['Initialize', 'Establish Vacuum']}
        />
        <div class="timeline">
            <div class="main-distancer" />
            <h1>CURRENT:</h1>
        </div>
        <RightSubsystem subsystemName="Tube Control" actions={['Initialize']} />
        <div class="timeline">
            <div class="main-distancer" />
            <h1>PREVIOUS:</h1>
        </div>
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
