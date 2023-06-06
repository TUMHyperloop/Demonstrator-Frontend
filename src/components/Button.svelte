<script>
    import progressSvg from '../assets/timeline-progress.svg'
    import errorSvg from '../assets/timeline-error.svg'
    import completedSvg from '../assets/timeline-completed.svg'
    import warningSvg from '../assets/timeline-warning.svg'
    import queuedSvg from '../assets/timeline-queued.svg'
    import { readSensorValues, writeValues } from '../stores/apiReadingCom.js'
    import { onDestroy, onMount } from 'svelte'

    export let buttonText = 'test'
    export let tcVaraible = 'GVL.test'
    export let width = 'fit-content'
    
    
    let buttonValue = null
    let svg = warningSvg;
    let interval = null
    
    onMount(async () => {
        let interval = setInterval(async () => {
            await readSensorValues([tcVaraible]).then((resp) => {
                 if (resp.success == true) {
                     // successful transmission
                     svg = resp.data[tcVaraible] ? completedSvg : errorSvg

                     // Get new state of the button so opposite value can be transmitted to backend when clicked
                     buttonValue = resp.data[tcVaraible]
                 } else { 
                     // connection error => show warning
                     svg = warningSvg
                 }
             })
        }, 2000);


        // TODO: remove this
        clearInterval(interval)
    })

    // Remove the interval to prevent memory leaks
    onDestroy(() => 
        clearInterval(interval)) 


    function buttonClicked() {
        console.log('button clicked', { tcVaraible, buttonValue })
        writeValues({ [tcVaraible]: !buttonValue })

        svg = queuedSvg
    }
</script>

<button style="width: {width};" on:click={buttonClicked} class="init"
    ><img src={svg} alt="" />
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
