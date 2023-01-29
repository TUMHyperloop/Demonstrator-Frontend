import { writable } from 'svelte/store'

// maps {state: {transitionVariable: targetValue}} or
// {state: {subsystem : {subsystemTransitionVar: targetValue}}}
export const tubeSteps = writable([
    {
        modeName: 'idle',
        interactionFlow: [
            {
                subModeName: null,
                modeVariables: [
                    { name: 'fbTubeControl.Mode', desiredValue: 'IDLE' },
                    { name: 'fbTubeControl.state', desiredValue: 'Idling' },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                },
            },
        ],
    },
    {
        modeName: 'initialize',
        interactionFlow: [
            {
                subModeName: null,
                modeVariables: [
                    {
                        name: 'TubeLightControl.Lights[0]',
                        desiredvalue: 'NOT ERROR',
                    },
                    {
                        name: 'TubeOperationMonitoring.CTR1000N',
                        desiredvalue: 'NOT ERROR',
                    },
                    {
                        name: 'TubeOperatingMonitoring.HIH4030',
                        desiredvalue: 'ERROR 3',
                    },
                ],
            },
        ],
    },
    {
        modeName: 'operational',
        interactionFlow: [
            {
                subModeName: 'setting vacuumm pumps',
                modeVariables: [
                    {
                        name: 'TubeLightControl.Lights[i]',
                        desiredValue: 'NOT ERROR',
                    },
                    {
                        name: 'TubeOperationMonitoring.CTR1000N',
                        desiredValue: 'NOT ERROR',
                    },
                    {
                        name: 'TubeOperatingMonitoring.HIH4030',
                        desiredValue: 'TARGET 3',
                    },
                ],
            },
            {
                subModeName: 'CLOSE TUBE DOOR',
                modeVariables: [
                    {
                        name: 'TubeDoor Pneumatic Actuator',
                        desiredValue: 'NOT ERROR',
                    },
                ],
            },
            {
                subModeName: 'ESTABLISHING VACCUUM',
                modeVariables: [
                    {
                        name: 'Vacuum Pump Start',
                        desiredValue: 'TRUE',
                    },
                ],
            },
        ],
    },
])
