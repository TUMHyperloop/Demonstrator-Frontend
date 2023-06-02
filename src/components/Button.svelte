<script>
    import progressSvg from '../assets/timeline-progress.svg'
    import errorSvg from '../assets/timeline-error.svg'
    import completedSvg from '../assets/timeline-completed.svg'
    import warningSvg from '../assets/timeline-warning.svg'
    import queuedSvg from '../assets/timeline-queued.svg'
    import { writeValues } from '../stores/apiReadingCom.js'

    export let buttonText = 'test'
    export let tcVaraible = 'GVL.test'
    export let width = 'fit-content'
    export let buttonValue = false

    function buttonClicked() {
        console.log('button clicked', { tcVaraible, buttonValue })
        writeValues({ [tcVaraible]: !buttonValue })
    }
</script>

<button style="width: {width};" on:click={buttonClicked} class="init"
    ><img src={buttonValue ? completedSvg : errorSvg} alt="" />
    <div class="text">{buttonText}</div>
</button>

<style>
    .init {
        font-family: 'Poppins';
        font-weight: 400;
        color: white;
        background-color: #212121;
        outline: 3px solid white;
        border-radius: 2px;
        font-size: 23px;
        letter-spacing: 0.025rem;
        margin: 20px 0 0 15px;
        padding: 0 10px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: start;
        min-width: fit-content;
    }

    .init:hover {
        background-color: #2e2e2e;
    }

    .text {
        margin-left: 10px;
    }

    button:focus,
    button:active {
        outline: 3px solid white !important;
    }
</style>
