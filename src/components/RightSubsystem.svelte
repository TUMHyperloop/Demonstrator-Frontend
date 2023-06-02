<script>
    export let subsystemName = 'Tube Control'
    import completedSvg from '../assets/timeline-completed.svg'
</script>

<div class="subsystem">
    <h2>{subsystemName}</h2>
    <div>
        <div class="action">
            <img src={completedSvg} alt="" /> <span>Activation Status</span>
        </div>
        <div class="subsystem-distancer" />
    </div>
    <div>
        <div class="action">
            <img src={completedSvg} alt="" /> <span>Ready for Op.</span>
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
