<script>
    import svgCompleted from '../assets/timeline-completed.svg'
    import svgError from '../assets/timeline-error.svg'
    import svgProgress from '../assets/timeline-progress.svg'
    import svgQueued from '../assets/timeline-queued.svg'
    import svgWarning from '../assets/timeline-warning.svg'
    import SideMenuTitle from './SideMenuTitle.svelte'
    import RightSubsystem from './RightSubsystem.svelte'
</script>

<div class="wrapper">
    <div class="content">
        <div class="timeline">
            <div class="main-distancer" />
            <h1>STATUS:</h1>
        </div>
        <RightSubsystem subsystemName="Tube Control" />
        <RightSubsystem subsystemName="Vacuum Control" />
        <RightSubsystem subsystemName="Propulsion Control" />
        <RightSubsystem subsystemName="Levitation Control" />
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
