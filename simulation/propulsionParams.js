export let propulsionParams = [
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
