<script>
    import completedSvg from '../assets/timeline-completed.svg'
    import errorSvg from '../assets/timeline-error.svg'
    import progressSvg from '../assets/timeline-progress.svg'
    import warningSvg from '../assets/timeline-warning.svg'
    import queuedSvg from '../assets/timeline-queued.svg'
    import liveSvg from '../assets/live-dot.svg'
    import { onMount } from 'svelte'

    let taskElement = null
    onMount(() => {
        // Get the width of the longest variable name
        let variableWidths = []
        taskElement
            .querySelectorAll('.single-value > .variable')
            .forEach((variable) => {
                variableWidths.push(variable.clientWidth)
            })

        let maxVariableWidth = Math.max(...variableWidths)

        // Get the width of the longest value
        let valueWidths = []
        taskElement
            .querySelectorAll('.single-value > .value')
            .forEach((value) => {
                valueWidths.push(value.clientWidth)
            })

        let maxValueWidth = Math.max(...valueWidths)

        // Set the width of all variables to the longest variable
        taskElement
            .querySelectorAll('.single-value > .variable')
            .forEach((variable) => {
                variable.style.paddingRight =
                    10 + maxVariableWidth - variable.clientWidth + 'px'
            })

        // Set the width of all values to the longest value
        taskElement
            .querySelectorAll('.single-value > .value')
            .forEach((value) => {
                let initialWidth = value.clientWidth

                value.style.paddingLeft =
                    (maxValueWidth - initialWidth) / 2 + 20 + 'px'

                value.style.paddingRight =
                    (maxValueWidth - initialWidth) / 2 + 20 + 'px'
            })

        console.log(
            'maxVariableWidth: ' + maxVariableWidth,
            'maxValueWidth: ' + maxValueWidth,
        )
    })
</script>

<div class="holder">
    <div class="task">
        <img src={completedSvg} alt="" />
        <div class="distancer">
            <h4>COMPLETED</h4>
            <div class="underline" />
        </div>
        <div class="live-tracking">
            <h3>IDLE</h3>

            <div class="beckhoff-container" bind:this={taskElement}>
                <div class="subcategory">
                    <div class="subcategory-distancer" />
                    <img src={completedSvg} alt="" />

                    <h5>SETTING VACUUM PUMPS</h5>
                </div>

                <div class="live-feed">
                    <img src={liveSvg} alt="" /> LIVE FEED
                </div>

                <div class="single-value">
                    <img src={completedSvg} alt="" />
                    <p class="variable">fbTubeControl</p>
                    <p class="value">Idling</p>
                </div>

                <div class="single-value">
                    <img src={completedSvg} alt="" />
                    <p class="variable">fbTubeControl.state</p>
                    <p class="value">fjdkahfdljk</p>
                </div>
            </div>
        </div>
    </div>
    <button style="margin-left: 130px;"> NEXT STEP </button>
    <button> CONTINUE </button>
</div>

<style>
    .holder {
        padding-bottom: 20px;
    }
    .task {
        position: relative;
        margin-top: 20px;
        left: -13px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    .task > img {
        position: relative;
        top: 5px;
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
        top: -19px;
    }
    .beckhoff-container > .single-value {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-top: 5px;
        justify-content: space-between;
        margin-left: 60px;
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
        cursor: pointer;
    }
    .subcategory {
        display: flex;
        flex-direction: row;
        position: relative;
        align-items: center;

        left: -25px;
        margin-bottom: 10px;
    }
    .subcategory-distancer {
        margin-right: 5px;
        width: 30px;
        height: 15px;
        border-left: 1px solid white;
        border-bottom: 1px solid white;
        position: relative;
        top: -5px;
    }
    .subcategory > h5 {
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 19px;
        letter-spacing: 0.075rem;
        color: white;
    }
    .subcategory > img {
        height: 18px;
        width: 18px;
        margin-right: 5px;
    }
</style>
