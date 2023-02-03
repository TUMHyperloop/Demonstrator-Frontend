export let vacuumParams = [
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
