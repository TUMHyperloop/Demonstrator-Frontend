<script>
    import completedSvg from '../assets/timeline-completed.svg'
    import errorSvg from '../assets/timeline-error.svg'
    import progressSvg from '../assets/timeline-progress.svg'
    import warningSvg from '../assets/timeline-warning.svg'
    import queuedSvg from '../assets/timeline-queued.svg'
    import liveSvg from '../assets/live-dot.svg'
    import { onMount } from 'svelte'

    export let config = null

    // Creates table like structure for Beckhoff variables
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

    // Determine which svg to use based on the status of a task
    function getSvg(statusText) {
        if (statusText == 'completed') {
            return completedSvg
        } else if (statusText == 'error') {
            return errorSvg
        } else if (statusText == 'progress') {
            return progressSvg
        } else if (statusText == 'warning') {
            return warningSvg
        } else if (statusText == 'queued') {
            return queuedSvg
        }
    }
</script>

<div class="holder">
    <div class="task">
        <img src={getSvg(config.status)} alt="" />

        <div class="distancer">
            <h4>{config.status.toUpperCase()}</h4>
            <div class="underline" />
        </div>

        <div class="live-tracking">
            <h3>{config.modeName.toUpperCase()}</h3>

            <div class="beckhoff-container" bind:this={taskElement}>
                <div class="subcategory">
                    <div class="subcategory-distancer" />
                    <img src={completedSvg} alt="" />

                    <h5>SETTING VACUUM PUMPS</h5>
                </div>

                <div class="live-feed">
                    <img src={liveSvg} alt="" /> LIVE FEED
                </div>

                {#each config.interactionFlow as interaction}
                    {#each interaction.modeVariables as modeVariable}
                        <div class="single-value">
                            <img src={getSvg(modeVariable.status)} alt="" />
                            <p class="variable">{modeVariable.name}</p>
                            <p class="value">{modeVariable.value}</p>
                        </div>
                    {/each}

                    <!-- Transtitions to the next subtask (simple tasks dont have this action) -->
                    {#if interaction.subModeName != null && interaction.userAction.status == 'progress'}
                        <button
                            >{interaction.userAction.description.toUpperCase()}</button
                        >
                    {/if}
                {/each}
            </div>
        </div>
    </div>

    <!-- Transitions to the next task -->
    {#if config.transitionAction.status == 'progress'}
        <button>
            {config.transitionAction.description.toUpperCase()}
        </button>
    {/if}
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
        top: -14px;
    }
    .beckhoff-container > .single-value {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-top: 5px;
        justify-content: space-between;
        margin-left: 10px;
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
        margin-top: 20px;
        position: relative;
        left: 5px;
        cursor: pointer;
    }
</style>
