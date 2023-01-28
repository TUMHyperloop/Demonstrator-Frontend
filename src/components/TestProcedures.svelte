<script>
    import { subsystemToTest, testStatus } from '../stores/test.config'

    export let subsystemName = ''
    import completedSvg from '../assets/timeline-completed.svg'
    import errorSvg from '../assets/timeline-error.svg'
    import progressSvg from '../assets/timeline-progress.svg'
    import warningSvg from '../assets/timeline-warning.svg'
    import queuedSvg from '../assets/timeline-queued.svg'
    import { onMount } from 'svelte'

    onMount(() => {})
</script>

<h1>STATE</h1>
<div class="timeline">
    <div class="task">
        <img src={completedSvg} alt="" />
        <div class="distancer">
            <h4>COMPLETED</h4>
            <div class="underline" />
        </div>
        <div class="live-tracking">
            <h3>IDLE</h3>
            <div class="beckhoff-container">
                <div class="live-feed">LIVE FEED</div>
                <div class="single-value">
                    <img src={completedSvg} alt="" />
                    <p class="variable">fbTubeControl.Mode</p>
                    <p class="value">IDLE</p>
                </div>
                <div class="single-value">
                    <img src={completedSvg} alt="" />
                    <p class="variable">fbTubeControl.state</p>
                    <p class="value">Idling</p>
                </div>
            </div>
        </div>
    </div>
    <button> CONTINUE </button>
</div>

<style>
    h1 {
        font-family: 'Poppins';
        font-weight: 500;
        color: white;
        font-size: 23px;
        letter-spacing: -0.025rem;
        margin: 20px 0 0 15px;
    }
    .timeline {
        position: relative;
        top: -3px;
        width: 46px;
        height: 300px;
        border-top: 3px solid white;
        border-left: 3px solid white;
        margin-left: 15px;
    }
    .task {
        position: relative;
        margin-top: 20px;
        left: -13px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    .distancer {
        margin-left: 10px;
    }
    .distancer > h4 {
        font-family: 'Poppins';
        font-weight: 300;
        color: white;
        font-size: 11px;
        letter-spacing: 0.075rem;
    }
    .distancer > .underline {
        width: 100%;
        height: 3px;
        background-color: white;
        width: 82px;
        height: 1px;
    }
    .live-tracking {
        margin-left: 10px;
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 22px;
        letter-spacing: 0.075rem;
        color: white;
        display: flex;
    }
    .beckhoff-container {
        margin-top: 30px;
    }
    .live-feed {
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 11px;
        letter-spacing: 0.075rem;
        color: white;
        position: relative;
        float: right;
        top: -14px;
    }
    .beckhoff-container > .single-value {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .single-value {
        margin-top: 5px;
    }
    .single-value > img {
        height: 18px;
        width: 18px;
    }
    .variable {
        margin-left: 6px;
        font-family: 'Play';
        font-weight: 300;
        font-size: 21px;
        letter-spacing: 0.035rem;
        color: white;
        border-bottom: 1px solid #636363;
        padding-right: 10px;
    }
    .value {
        font-family: 'Play';
        font-weight: 200;
        font-size: 17px;
        letter-spacing: 0.035rem;
        color: white;
        padding: 3px 20px;
        border: 1px solid #636363;
        border-radius: 8px 8px 8px 0px;
    }
    button {
        width: 154px;
        height: 38px;
        background: white;
        font-family: 'Poppins';
        letter-spacing: 0.035rem;
        color: #212121;
        font-size: 21px;
        font-weight: 600;
        border-radius: 0px 5px 5px 0px;
        position: relative;
        margin-top: 20px;
        left: 5px;
    }
</style>
