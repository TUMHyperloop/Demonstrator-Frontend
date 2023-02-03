export let tubeParams = [
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
