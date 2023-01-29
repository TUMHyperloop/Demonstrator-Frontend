import { writable } from 'svelte/store'

// maps {state: {transitionVariable: targetValue}} or
// {state: {subsystem : {subsystemTransitionVar: targetValue}}}
export const tubeSteps = writable([
    {
        modeName: 'idle',
        status: 'completed',
        interactionFlow: [
            {
                subModeName: null,
                status: 'completed',
                modeVariables: [
                    {
                        name: 'fbTubeControl.Mode',
                        value: 'IDLE',
                        status: 'progress',
                    },
                    {
                        name: 'fbTubeControl.state',
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
        interactionFlow: [
            {
                subModeName: null,
                modeVariables: [
                    {
                        name: 'TubeLightControl.Lights[0]',
                        value: 'NOT ERROR',
                        status: 'completed',
                    },
                    {
                        name: 'TubeOperationMonitoring.CTR1000N',
                        value: 'NOT ERROR',
                        status: 'progress',
                    },
                    {
                        name: 'TubeOperatingMonitoring.HIH4030',
                        value: 'ERROR 3',
                        status: 'queued',
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
                        value: 'NOT ERROR',
                        status: 'queued',
                    },
                    {
                        name: 'TubeOperationMonitoring.CTR1000N',
                        value: 'NOT ERROR',
                        status: 'queued',
                    },
                    {
                        name: 'TubeOperatingMonitoring.HIH4030',
                        value: 'TARGET 3',
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
                subModeName: 'close tube door',
                modeVariables: [
                    {
                        name: 'TubeDoor Pneumatic Actuator',
                        value: 'NOT ERROR',
                        status: 'queued',
                    },
                ],
            },
            {
                subModeName: 'establish vacuum',
                modeVariables: [
                    {
                        name: 'Vacuum Pump Start',
                        value: 'TRUE',
                        status: 'queued',
                    },
                ],
            },
        ],
    },
    {
        modeName: 'shutdown',
        interactionFlow: [
            {
                subModeName: null,
                modeVariables: [
                    {
                        name: 'fbTubeControl.Mode',
                        value: 'SHUTDOWN',
                        status: 'queued',
                    },
                    {
                        name: 'fbTubeControl.state',
                        value: 'Shut',
                        status: 'queued',
                    },
                    { name: 'isShutdowned', value: 'true', status: 'queued' },
                ],
                userAction: {
                    description: 'Done',
                    variableName: 'fbTransitionToOperational',
                    valueToWrite: true,
                },
            },
        ],
    },
])
