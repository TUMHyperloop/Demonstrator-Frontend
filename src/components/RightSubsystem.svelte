<script>
    import svgCompleted from '../assets/timeline-completed.svg'
    import svgError from '../assets/timeline-error.svg'
    import svgProgress from '../assets/timeline-progress.svg'
    import svgQueued from '../assets/timeline-queued.svg'
    import svgWarning from '../assets/timeline-warning.svg'
    import errorSvg from '../assets/timeline-error.svg'
    import completedSvg from '../assets/timeline-completed.svg'
    import warningSvg from '../assets/timeline-warning.svg'
    import queuedSvg from '../assets/timeline-queued.svg'
    export let subsystemName = 'Tube Control'
    export let subsystemValues = ["DEACTIVATED", false]

    $: svg1 = subsystemValues[0] == "ACTIVATED" ? completedSvg : errorSvg
    $: svg2 = subsystemValues[1] ? completedSvg : errorSvg

</script>

<div class="subsystem">
    <h2>{subsystemName}</h2>
    <div>
        <div class="action">
            <img src={svg1} alt="" /> <span>Activation Status</span>
        </div>
        <div class="subsystem-distancer" />
    </div>
    <div>
        <div class="action">
            <img src={svg2} alt="" /> <span>Ready for Op.</span>
        </div>
        <div class="subsystem-distancer" />
    </div>
</div>

<style>
    .subsystem {
        display: flex;
        align-items: end;
        flex-direction: column;
        margin-right: 16px;
        color: white;
    }
    .subsystem h2 {
        font-weight: 500;
        font-family: 'Poppins';
        font-size: 15px;
        margin-bottom: 5px;
    }
    .subsystem > div {
        display: flex;
        flex-direction: row;
        width: 180px;
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 15px;
        line-height: 30px;
        margin-right: 5px;
        white-space: nowrap;
    }
    .action {
        width: fit-content;
        margin-right: 7px;
        display: flex;
        align-items: center;
    }
    .subsystem-distancer {
        flex-grow: 1;
        height: 15px;
        margin-left: 5px;
        border-bottom: 1px solid #636363;
        border-right: 1px solid #636363;
    }
    .action img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
</style>
