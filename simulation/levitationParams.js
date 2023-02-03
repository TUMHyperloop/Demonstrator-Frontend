export let levitationParams = [
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
                        status: 'completed',
                    },
                    {
                        name: 'fbLevitationControl.state',
                        value: 'Idling',
                        status: 'completed',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbStartLevitation',
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
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbLevitationSetDesiredHeight',
                        value: 'inProgress',
                        status: 'progress',
                    },
                    {
                        name: 'fbConfirmHeightSet',
                        value: 'true',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fb',
            valueToWrite: true,
            status: 'queued',
        },
    },
    {
        modeName: 'Operational',
        status: 'queued',
        interactionFlow: [
            {
                subModeName: 'Start levitation',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fb.Mode',
                        value: 'ACTIVATE',
                        status: 'completed',
                    },
                    {
                        name: 'fbLevitation.state',
                        value: 'Acitvating',
                        status: 'completed',
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
        status: 'queued',
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
