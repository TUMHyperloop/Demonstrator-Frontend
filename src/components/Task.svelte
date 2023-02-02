<script>
    import completedSvg from '../assets/timeline-completed.svg'
    import errorSvg from '../assets/timeline-error.svg'
    import progressSvg from '../assets/timeline-progress.svg'
    import warningSvg from '../assets/timeline-warning.svg'
    import queuedSvg from '../assets/timeline-queued.svg'
    import liveSvg from '../assets/live-dot.svg'
    import { afterUpdate } from 'svelte'

    export let config = null
    export let subsystemName = null

    // Remove the table styling
    function resetWitdths() {
        taskElement
            .querySelectorAll('.single-value > .variable')
            .forEach((variable) => {
                variable.style.paddingRight = 0 + 'px'
            })

        // Set the width of all values to the longest value
        taskElement
            .querySelectorAll('.single-value > .value')
            .forEach((value) => {
                value.style.paddingLeft = 0 + 'px'
                value.style.paddingRight = 0 + 'px'
            })
    }

    // Creates table like structure for Beckhoff variables
    function setWidths() {
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
    }

    // Will be called after onMount
    afterUpdate(() => {
        // Reset the widths of the variables
        resetWitdths()

        // Set the widths of the variables
        setWidths()
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

    let taskElement = null
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

            <!-- Loops over each subsystem (interaction) if more than 1 -->
            <div class="beckhoff-container" bind:this={taskElement}>
                {#each config.interactionFlow as interaction}
                    <!-- Name of the subtask (if present) -->
                    {#if interaction.subModeName != null}
                        <div class="subcategory">
                            <div class="subcategory-distancer" />
                            <img src={getSvg(interaction.status)} alt="" />

                            <h5>{interaction.subModeName.toUpperCase()}</h5>
                        </div>
                    {/if}

                    <!-- Show variables only if the subtask is in progress -->
                    {#if interaction.status == 'progress'}
                        <!-- Live feed -->
                        <div
                            class="live-feed"
                            class:multicat-live-feed={interaction.subModeName !=
                                null}
                        >
                            <img src={liveSvg} alt="" /> LIVE FEED
                        </div>
                        <!-- Loops over every variable that has to be set in the interaction -->
                        {#each interaction.modeVariables as modeVariable}
                            <!-- Beckhoff variables -->
                            <div
                                class="single-value"
                                class:multicat-single-value={interaction.subModeName !=
                                    null}
                            >
                                <img src={getSvg(modeVariable.status)} alt="" />
                                <p class="variable">{modeVariable.name}</p>
                                <p class="value">{modeVariable.value}</p>
                            </div>
                        {/each}
                    {/if}

                    <!-- Transtitions to the next subtask (simple tasks dont have this action) -->
                    {#if interaction.subModeName != null && interaction.userAction.status == 'progress'}
                        <button
                            on:click={() => {
                                fetch(
                                    'http://localhost:3000/' + subsystemName,
                                    {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            type: 'user-action',
                                            name: interaction.userAction
                                                .variableName,
                                        }),
                                    },
                                )
                            }}
                            class:multicat-button={interaction.subModeName !=
                                null}
                            >{interaction.userAction.description.toUpperCase()}</button
                        >
                    {/if}
                {/each}
            </div>
        </div>
    </div>

    <!-- Transitions to the next haupt task -->
    {#if config.transitionAction.status == 'progress'}
        <button
            on:click={() => {
                fetch('http://localhost:3000/' + subsystemName, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        type: 'transition-action',
                        name: config.transitionAction.variableName,
                    }),
                })
            }}
        >
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
        white-space: nowrap;
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
        top: -10px;
    }
    .multicat-live-feed {
        top: -16px;
    }
    .beckhoff-container > .single-value {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-top: 8px;
        justify-content: space-between;
        margin-left: 10px;
    }
    .multicat-single-value {
        margin-left: 60px !important;
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
        margin-top: 5px;
        left: 5px;
        cursor: pointer;
    }
    .multicat-button {
        left: -23px !important;
        margin-bottom: 15px;
        margin-top: 20px;
    }
    .subcategory {
        display: flex;
        flex-direction: row;
        position: relative;
        align-items: center;
        left: -25px;
        margin-top: 10px;
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
    /* Infinite rotation of the buffer wheel */
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .rotate {
        animation: rotate 3s ease-in-out infinite;
    }
</style>
