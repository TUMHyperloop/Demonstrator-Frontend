import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

app.get('/subsystem/:subsystemName', (req, res) => {
    const subsystemName = req.params.subsystemName
    res.json(allSteps[subsystemName])
})

app.post('/subsystem/:subsystemName', (req, res) => {
    const subsystemName = req.params.subsystemName

    const data = req.body

    setSubsystemVarialbe(subsystemName, data)

    res.json({})
})

function setSubsystemVarialbe(subsystemName, data) {
    if (data.type == 'transition-action') {
        let varialbeName = data.name

        for (let i = 0; i < allSteps[subsystemName].length; i++) {
            // Checks which button has been pressed (varialbe to be set has to be unique)
            if (
                allSteps[subsystemName][i].transitionAction.variableName ==
                varialbeName
            ) {
                // Sets the button and task to completed
                allSteps[subsystemName][i].transitionAction.status = 'completed'
                allSteps[subsystemName][i].status = 'completed'

                // Sets when the task has subtasks, the first subtask to completed
                allSteps[subsystemName][i].interactionFlow[0].status =
                    'completed'

                // Prevents change of the status of next task if (current task) == (last task)
                if (i + 1 == allSteps[subsystemName].length) {
                    break
                }

                // Sets the next task to progress
                allSteps[subsystemName][i + 1].status = 'progress'
                if (allSteps[subsystemName][i + 1].interactionFlow.length > 1) {
                    // If next task has subtasks, set the first subtask to progress
                    allSteps[subsystemName][i + 1].interactionFlow[0].status =
                        'progress'

                    // Variables length inside the subtask
                    let numberOfVars =
                        allSteps[subsystemName][i + 1].interactionFlow[0]
                            .modeVariables.length

                    // Set the completions to true progressively
                    for (let j = 0; j < numberOfVars; j++) {
                        // Set the variables to progress first
                        setTimeout(() => {
                            allSteps[subsystemName][
                                i + 1
                            ].interactionFlow[0].modeVariables[j].status =
                                'progress'
                        }, j * 2000)

                        // After 2 seconds, set each to completed
                        setTimeout(() => {
                            allSteps[subsystemName][
                                i + 1
                            ].interactionFlow[0].modeVariables[j].status =
                                'completed'
                        }, 2000 + j * 2000)
                    }

                    // Set user-action button to progress
                    setTimeout(() => {
                        allSteps[subsystemName][
                            i + 1
                        ].interactionFlow[0].userAction.status = 'progress'
                    }, numberOfVars * 2000)
                } else {
                    // Set make the task visible
                    allSteps[subsystemName][i + 1].interactionFlow[0].status =
                        'progress'

                    // Variables length inside the subtask
                    let numberOfVars =
                        allSteps[subsystemName][i + 1].interactionFlow[0]
                            .modeVariables.length

                    // If the next task has no subtasks, change directly the transition condition
                    // Firsst set the modeVariables time delayed to completed
                    for (let j = 0; j < numberOfVars; j++) {
                        // Set the variables immediately to progress
                        setTimeout(() => {
                            allSteps[subsystemName][
                                i + 1
                            ].interactionFlow[0].modeVariables[j].status =
                                'progress'
                        }, j * 2000)

                        // Wait 2 seconds and set them to completed
                        setTimeout(() => {
                            allSteps[subsystemName][
                                i + 1
                            ].interactionFlow[0].modeVariables[j].status =
                                'completed'
                        }, 2000 + j * 2000)
                    }

                    setTimeout(() => {
                        allSteps[subsystemName][i + 1].transitionAction.status =
                            'progress'
                    }, numberOfVars * 2000)
                }
            }
        }
    } else if (data.type == 'user-action') {
        let variableName = data.name

        for (let i = 0; i < allSteps[subsystemName].length; i++) {
            for (
                let j = 0;
                j < allSteps[subsystemName][i].interactionFlow.length;
                j++
            ) {
                // Finds where the subtask is (check first if there is a user action => hence its subtask)
                if (
                    allSteps[subsystemName][i].interactionFlow[j].userAction &&
                    allSteps[subsystemName][i].interactionFlow[j].userAction
                        .variableName == variableName
                ) {
                    allSteps[subsystemName][i].interactionFlow[j].status =
                        'completed'
                    allSteps[subsystemName][i].interactionFlow[
                        j
                    ].userAction.status = 'completed'

                    // Prevents change of the status of next subtask if (current task) == (last task)
                    if (
                        j + 1 ==
                        allSteps[subsystemName][i].interactionFlow.length
                    ) {
                        // Set the transition-action to progress
                        allSteps[subsystemName][i].transitionAction.status =
                            'progress'
                        break
                    }

                    // Sets the next subtask to progress
                    allSteps[subsystemName][i].interactionFlow[j + 1].status =
                        'progress'

                    let numberOfVars =
                        allSteps[subsystemName][i].interactionFlow[j + 1]
                            .modeVariables.length

                    // Set the completions to true progressively
                    for (let k = 0; k < numberOfVars; k++) {
                        setTimeout(() => {
                            allSteps[subsystemName][i].interactionFlow[
                                j + 1
                            ].modeVariables[k].status = 'progress'
                        }, k * 2000)

                        // After 2 seconds, set each to completed
                        setTimeout(() => {
                            allSteps[subsystemName][i].interactionFlow[
                                j + 1
                            ].modeVariables[k].status = 'completed'
                        }, 2000 + k * 2000)
                    }

                    // Set user-action button to progress
                    setTimeout(() => {
                        allSteps[subsystemName][i].interactionFlow[
                            j + 1
                        ].userAction.status = 'progress'
                    }, numberOfVars * 2000)
                }
            }
        }
    }
}

let tubeSteps = [
    {
        modeName: 'init',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbTubeControl.Mode',
                        value: 'IDLE',
                        status: 'completed',
                    },
                    {
                        name: 'fbTubeControl.state',
                        value: 'Idling',
                        status: 'completed',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'start test',
            variableName: 'tubeButton1',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'initialize',
        status: 'queued',
        interactionFlow: [
            {
                subModeName: null,
                status: 'queued',
                modeVariables: [
                    {
                        name: 'fbTubeCameras',
                        value: 'INITIALIZED',
                        status: 'progress',
                    },
                    {
                        name: 'fbTubeLevelSensor',
                        value: 'Initializing',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'initialize',
            variableName: 'tubeButton2',
            valueToWrite: true,
            status: 'queued',
        },
    },
    {
        modeName: 'Operational',
        status: 'queued',
        interactionFlow: [
            {
                subModeName: 'Close door',
                status: 'queued',
                modeVariables: [
                    {
                        name: 'fbTubeStabilizer.Mode',
                        value: 'ACTIVATE',
                        status: 'progress',
                    },
                    {
                        name: 'fbTubePressure.state',
                        value: 'Acitvating',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'tubeButton3',
                    valueToWrite: true,
                    status: 'queued',
                },
            },
            {
                subModeName: 'Activate pneumatic cylinder',
                status: 'queued',
                modeVariables: [
                    {
                        name: 'fbTubeCurrent.state',
                        value: 'CLOSE',
                        status: 'queued',
                    },
                    {
                        name: 'fbTubeVoltage.state',
                        value: 'Closing',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'tubeButton4',
                    valueToWrite: true,
                    status: 'queued',
                },
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'tubeButton5',
            valueToWrite: true,
            status: 'queued',
        },
    },
    {
        modeName: 'shutdown',
        status: 'queued',
        interactionFlow: [
            {
                subModeName: null,
                status: 'queued',
                modeVariables: [
                    {
                        name: 'fbTubeControl.Mode',
                        value: 'SHUTDOWN',
                        status: 'queued',
                    },
                    {
                        name: 'fbTubeControl.state',
                        value: 'Shutting',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'stop system',
            variableName: 'tubeButton6',
            valueToWrite: true,
            status: 'queued',
        },
    },
]

let vacuumSteps = [
    {
        modeName: 'startup',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbVacuumControl.Mode',
                        value: 'IDLE',
                        status: 'progress',
                    },
                    {
                        name: 'fbVacuumState.state',
                        value: 'Idling',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'initialize',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbVacuumControl.Mode',
                        value: 'INITIALIZED',
                        status: 'progress',
                    },
                    {
                        name: 'fbVacuumVacuum.state',
                        value: 'Initializing',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'Operational',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: 'Activate vacuum pump',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbVacuumPump.Mode',
                        value: 'ACTIVATE',
                        status: 'progress',
                    },
                    {
                        name: 'fbVacuumPump.state',
                        value: 'Acitvating',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
            {
                subModeName: 'Activate vacuum valve',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbValve.Mode',
                        value: 'CLOSE',
                        status: 'progress',
                    },
                    {
                        name: 'fbValve.state',
                        value: 'Closing',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'shutdown',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbVacuum.Mode',
                        value: 'SHUTDOWN',
                        status: 'progress',
                    },
                    {
                        name: 'fbTubeControl.state',
                        value: 'Shutting',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
]
let interiorSteps = [
    {
        modeName: 'idle',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'interiorControl.Mode',
                        value: 'IDLE',
                        status: 'progress',
                    },
                    {
                        name: 'fbInterior.state',
                        value: 'Idling',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'initialize',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbInterior.Mode',
                        value: 'INITIALIZED',
                        status: 'progress',
                    },
                    {
                        name: 'fbIntrerior.state',
                        value: 'Initializing',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'Operational',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: 'Activate interior lights',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbLights.Mode',
                        value: 'ACTIVATE',
                        status: 'progress',
                    },
                    {
                        name: 'fbLights.state',
                        value: 'Acitvating',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
            {
                subModeName: 'Activate interior fan',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbLights.Mode',
                        value: 'ACTIVATE',
                        status: 'progress',
                    },
                    {
                        name: 'fbLights.state',
                        value: 'Activated',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'shutdown',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbLightsControl.Mode',
                        value: 'SHUTDOWN',
                        status: 'progress',
                    },
                    {
                        name: 'fbLightsControl.state',
                        value: 'Shutting',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
]
let propulsionSteps = [
    {
        modeName: 'idle',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbPropulsion.Mode',
                        value: 'IDLE',
                        status: 'progress',
                    },
                    {
                        name: 'fbPropulsion.position',
                        value: '0',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'initialize',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbPropulsion.Mode',
                        value: 'INITIALIZED',
                        status: 'progress',
                    },
                    {
                        name: 'fbPropulsionSystem.state',
                        value: 'Initializing',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'Operational',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: 'Activate propulsion system',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbPropulsion.Mode',
                        value: 'ACTIVATE',
                        status: 'progress',
                    },
                    {
                        name: 'fbPropulsion.state',
                        value: 'Acitvating',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
            {
                subModeName: 'Move propulsion system to 100%',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbPropulsionSystem.Mode',
                        value: 'ACTIVATE',
                        status: 'progress',
                    },
                    {
                        name: 'fbPropulsion.state',
                        value: 'Loaded',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'shutdown',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbPropulsion.Mode',
                        value: 'SHUTDOWN',
                        status: 'progress',
                    },
                    {
                        name: 'fbPropulsionControl.state',
                        value: 'Shutting',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
]
let levitationSteps = [
    {
        modeName: 'idle',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbLevitationControl.Mode',
                        value: 'IDLE',
                        status: 'progress',
                    },
                    {
                        name: 'fbLevitation.state',
                        value: 'Idling',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'initialize',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbLevitatioinControl.Mode',
                        value: 'INITIALIZED',
                        status: 'progress',
                    },
                    {
                        name: 'fbLevitation.state',
                        value: 'Initializing',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'Operational',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: 'Start levitation',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fb.Mode',
                        value: 'ACTIVATE',
                        status: 'progress',
                    },
                    {
                        name: 'fbLevitation.state',
                        value: 'Acitvating',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
            {
                subModeName: 'Move to desired height',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbLevitation.Mode',
                        value: 'CLOSE',
                        status: 'progress',
                    },
                    {
                        name: 'fbLevitation.state',
                        value: 'Closing',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'shutdown',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbLevitation.Mode',
                        value: 'SHUTDOWN',
                        status: 'progress',
                    },
                    {
                        name: 'fbLevitation.state',
                        value: 'Shutting',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbTransitionToOperational',
            valueToWrite: true,
            status: 'progress',
        },
    },
]

let allSteps = {
    tube: tubeSteps,
    vacuum: vacuumSteps,
    interior: interiorSteps,
    propulsion: propulsionSteps,
    levitation: levitationSteps,
}
