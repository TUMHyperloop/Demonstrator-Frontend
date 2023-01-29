import { writable } from 'svelte/store'

// maps {state: {transitionVariable: targetValue}} or
// {state: {subsystem : {subsystemTransitionVar: targetValue}}}
let tubeSteps = [
    {
        modeName: 'idle',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: 'hello 2',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbTubeControl.Mode',
                        value: 'IDLE',
                        status: 'progress',
                    },
                    {
                        name: 'fbTubeControl',
                        value: 'Idlingfdsfd',
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
                subModeName: 'hello world',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbTubeControl.Mode',
                        value: 'IDLE',
                        status: 'progress',
                    },
                    {
                        name: 'fbTubeControl',
                        value: 'Idlingfdsfd',
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
        modeName: 'idle',
        status: 'completed',
        interactionFlow: [
            {
                subModeName: 'hello 2',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbTubeControl.Mode',
                        value: 'IDLE',
                        status: 'progress',
                    },
                    {
                        name: 'fbTubeControl',
                        value: 'Idlingfdsfd',
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
                subModeName: 'hello world',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbTubeControl.Mode',
                        value: 'IDLE',
                        status: 'progress',
                    },
                    {
                        name: 'fbTubeControl',
                        value: 'Idlingfdsfd',
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
]

let vacuumSteps = []
let interiorSteps = []
let propulsionSteps = []
let levitationSteps = []

export const allSteps = writable({
    tube: tubeSteps,
    vacuum: vacuumSteps,
    interior: interiorSteps,
    propulsion: propulsionSteps,
    levitation: levitationSteps,
})

allSteps.update((steps) => {
    steps.tube = tubeSteps
    steps.vacuum = vacuumSteps
    steps.interior = interiorSteps
    steps.propulsion = propulsionSteps
    steps.levitation = levitationSteps
    return steps
})
