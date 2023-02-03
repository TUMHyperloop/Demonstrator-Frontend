import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { tubeParams } from './tubeParams.js'
import { levitationParams } from './levitationParams.js'
import { interiorParams } from './interiorParams.js'
import { vacuumParams } from './vacuumParams.js'
import { propulsionParams } from './propulsionParams.js'

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

app.get('/')

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

let allSteps = {
    tube: tubeParams,
    vacuum: vacuumParams,
    interior: interiorParams,
    propulsion: propulsionParams,
    levitation: levitationParams,
}
