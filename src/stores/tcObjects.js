import { writable } from 'svelte/store'

// Tube screen

export const vacuumSensors = writable({
    "GUI_OUTPUT.VacuumControlData.CV_Condition": '0.0',
    "GUI_OUTPUT.VacuumControlData.PPV_Condition": '0.0',
    "GUI_OUTPUT.VacuumControlData.ERV_Condition[0]": '0.0',
    "GUI_OUTPUT.VacuumControlData.ERV_Condition[1]": '0.0',
    "GUI_OUTPUT.VacuumControlData.PressureSensor_Condition": '0.0',
    "GUI_OUTPUT.VacuumControlData.SV750BF_Condition": '0.0',
    "GUI_OUTPUT.VacuumControlData.Gasballastventil_Condition": '0.0',
    "GUI_OUTPUT.VacuumControlData.Saugstutzventil_Condition": '0.0',
    'GUI_OUTPUT.VacuumControlData.WHU2500_Condition': '0.0',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_WarmUpTimer': '00:00:00',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_ShutDownTimer': '00:00:00',
})

export const vacuumMappings = writable({
    "GUI_OUTPUT.VacuumControlData.CV_Condition": 'CV',
    "GUI_OUTPUT.VacuumControlData.PPV_Condition": 'PPV',
    "GUI_OUTPUT.VacuumControlData.ERV_Condition[0]": 'ERV1',
    "GUI_OUTPUT.VacuumControlData.ERV_Condition[1]": 'ERV2',
    "GUI_OUTPUT.VacuumControlData.PressureSensor_Condition": 'Pressure Sens:',
    "GUI_OUTPUT.VacuumControlData.SV750BF_Condition": 'SV750BF',
    "GUI_OUTPUT.VacuumControlData.Gasballastventil_Condition": 'Gasballastventil',
    'GUI_OUTPUT.VacuumControlData.Saugstutzventil_Condition': 'Saugstutzventil',
    'GUI_OUTPUT.VacuumControlData.WHU2500_Condition': 'WHU2500',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_WarmUpTimer': 'warmUpTimer',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_ShutDownTimer': 'shutDownTimer',
})

// Main Screen

export const buttonsTc = writable({
    "GUI_INPUT.bDataExchangeWithGUIDone": false,
    "GUI_INPUT.bTurnOffSirens": false,
    "GUI_INPUT.bGoOP": false,
    "GUI_INPUT.bGoBBP": false,
    "GUI_INPUT.bGoIDLE": false,
    "GUI_INPUT.bGoDEINIT": false,
    "GUI_INPUT.bActivateTubeDoorPneumatics": false,
    "GUI_INPUT.bDeactivateTubeDoorPneumatics": false,
    "GUI_INPUT.bDepressurizeTube": false,
    "GUI_INPUT.bRepressurizeTube": false,
    "GUI_INPUT.bOpenPodDoor": false, 
    "GUI_INPUT.bClosePodDoor": false,
    "GUI_INPUT.bTestWithHumans": false,
    tcTargetPressure: '8',
})

export const buttonsTcMappings = writable({
    "GUI_INPUT.bDataExchangeWithGUIDone": 'Write INIT Data',
    "GUI_INPUT.bTurnOffSirens": 'Turn OFF Sirens',
    "GUI_INPUT.bGoOP": 'Go OP',
    "GUI_INPUT.bGoBBP": 'Go BBP',
    "GUI_INPUT.bGoIDLE": 'Go IDLE',
    "GUI_INPUT.bGoDEINIT": 'Go DEINIT',
    "GUI_INPUT.bActivateTubeDoorPneumatics": 'Activate Zylinders',
    "GUI_INPUT.bDeactivateTubeDoorPneumatics": 'Deactivate Zylinders',
    "GUI_INPUT.bDepressurizeTube": 'Depressurize',
    "GUI_INPUT.bRepressurizeTube": 'Repressurize',
    "GUI_INPUT.bOpenPodDoor": "Open Door", 
    "GUI_INPUT.bClosePodDoor": "Close Door",
    "GUI_INPUT.bTestWithHumans": "Test with Humans",

})

export const sensorsTcMain = writable({
    "GUI_OUTPUT.OrchestrationData.BlueButton_Position[0]": 'N/A',
    "GUI_OUTPUT.OrchestrationData.BlueButton_Position[1]" : "N/A", 
    "GUI_OUTPUT.OrchestrationData.BlueButton_Position[2]": "N/A",
    "GUI_OUTPUT.OrchestrationData.BlueButton_Position[3]": "N/A", 
    "GUI_OUTPUT.OrchestrationData.RedButton_Position": "N/A",
    "GUI_OUTPUT.OrchestrationData.Sirene_PowerState[0]": "Siren 1", 
    "GUI_OUTPUT.OrchestrationData.Sirene_PowerState[1]": "Siren 2",
    "GUI_OUTPUT.OrchestrationData.WarningLight_PowerState[0]": "Warning Light 1", 
    "GUI_OUTPUT.OrchestrationData.WarningLight_PowerState[1]": "Warning Light 2",
})

export const sensorsTcMainMappings = writable({
    "GUI_OUTPUT.OrchestrationData.BlueButton_Position[0]": 'Blue Button OC1',
    "GUI_OUTPUT.OrchestrationData.BlueButton_Position[1]" : "Blue Button OC2",
    "GUI_OUTPUT.OrchestrationData.BlueButton_Position[2]": "Blue Button Tube Door",
    "GUI_OUTPUT.OrchestrationData.BlueButton_Position[3]": "Blue Button Pod Interior",
    "GUI_OUTPUT.OrchestrationData.RedButton_Position": "Not-Aus",
    "GUI_OUTPUT.OrchestrationData.Sirene_PowerState[0]": "Siren 1",
    "GUI_OUTPUT.OrchestrationData.Sirene_PowerState[1]": "Siren 2",
    "GUI_OUTPUT.OrchestrationData.WarningLight_PowerState[0]": "Warning Light 1",
    "GUI_OUTPUT.OrchestrationData.WarningLight_PowerState[1]": "Warning Light 2",
})


// Subsystem for test selector 

export const subsystemsTc = writable({
    "GUI_INPUT.bActivateTubeControl": false, 
    "GUI_INPUT.bActivateVacuumControl": false,
    "GUI_INPUT.bActivateInteriorControl": false, 
    "GUI_INPUT.bActivatePropulsion": false, 
    "GUI_INPUT.bActivateLevNGuide": false, 
}) 

export const subsystemsTcMappings = writable({
    "GUI_INPUT.bActivateTubeControl": 'Tube Control',
    "GUI_INPUT.bActivateVacuumControl": 'Vacuum Control',
    "GUI_INPUT.bActivateInteriorControl": 'Interior Control',
    "GUI_INPUT.bActivatePropulsion": 'Propulsion',
    "GUI_INPUT.bActivateLevNGuide": 'Levitation & Guidance',
})

