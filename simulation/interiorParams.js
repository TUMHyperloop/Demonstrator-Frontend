export let interiorParams = [
    {
        modeName: 'idle',
        status: 'progress',
        interactionFlow: [
            {
                subModeName: null,
                status: 'completed',
                modeVariables: [
                    {
                        name: 'interiorControl.Mode',
                        value: 'IDLE',
                        status: 'completed',
                    },
                    {
                        name: 'fbInterior.state',
                        value: 'Idling',
                        status: 'completed',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbStartInterior',
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
                        name: 'fbInteriorLights',
                        value: 'STARTED',
                        status: 'progress',
                    },
                    {
                        name: 'fbInterorCameras',
                        value: 'Initialized',
                        status: 'queued',
                    },
                ],
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbStartInteriorLights',
            valueToWrite: true,
            status: 'progress',
        },
    },
    {
        modeName: 'Operational',
        status: 'queued',
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
                    variableName: 'fbLightsActivated',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
            {
                subModeName: 'Activate interior fan',
                status: 'progress',
                modeVariables: [
                    {
                        name: 'fbCameras.MODE',
                        value: 'ACTIVATE',
                        status: 'progress',
                    },
                    {
                        name: 'fbCameras.state',
                        value: 'Activated',
                        status: 'queued',
                    },
                ],
                userAction: {
                    description: 'Continue',
                    variableName: 'fbCamerasActivate',
                    valueToWrite: true,
                    status: 'progress',
                },
            },
        ],
        transitionAction: {
            description: 'Continue',
            variableName: 'fbCamerasAndLightsActivate',
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
            variableName: 'fbInteriorShutdown',
            valueToWrite: true,
            status: 'progress',
        },
    },
]
