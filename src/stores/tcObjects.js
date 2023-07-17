import { writable } from 'svelte/store'
import { readSensorValues } from './apiReadingCom'

// Activateion and Ready for operational
export const activationStatusTc = writable({
    'GUI_OUTPUT.LevNGuideData.prgLevNGuide_ActivationStatus': 'DEACTIVATED',
    'GUI_OUTPUT.LevNGuideData.prgLevNGuide_ReadyForOperational': false,
    'GUI_OUTPUT.InteriorControlData.prgInteriorControl_ActivationStatus':
        'DEACTIVATED',
    'GUI_OUTPUT.InteriorControlData.prgInteriorControl_ReadyForOperational': false,
    'GUI_OUTPUT.PropulsionData.prgPropulsion_ActivationStatus': 'DEACTIVATED',
    'GUI_OUTPUT.PropulsionData.prgPropulsion_ReadyForOperational': false,
    'GUI_OUTPUT.TubeControlData.prgTubeControl_ActivationStatus': 'DEACTIVATED',
    'GUI_OUTPUT.TubeControlData.prgTubeControl_ReadyForOperational': false,
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_ActivationStatus':
        'DEACTIVATED',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_ReadyForOperational': false,
})

// Propulsion screen
export const propulsionTc = writable({
    'GUI_OUTPUT.TubeControlData.HumiditySensor_Condition': 'N/A',
    'GUI_OUTPUT.TubeControlData.TubeOperationMonitoring_Condition': 'N/A',
    'GUI_OUTPUT.TubeControlData.TubeLightControl_Condition': 'N/A',
    'GUI_OUTPUT.TubeControlData.Light_Condition[0]': 'N/A',
    'GUI_OUTPUT.TubeControlData.PneumaticPressureSensors_Condition[0]': 'N/A',
    'GUI_OUTPUT.TubeControlData.TubeDoorSystem_Condition': 'N/A',
    'GUI_OUTPUT.PropulsionData.TemperatureArmature_Temperature[0]': 'N/A',
    'GUI_OUTPUT.PropulsionData.TemperatureArmature_Temperature[1]': 'N/A',
    'GUI_OUTPUT.PropulsionData.TemperatureArmature_Temperature[2]': 'N/A',
})

export const propulsionMappings = writable({
    'GUI_OUTPUT.TubeControlData.HumiditySensor_Condition':
        'Humidity Sensor Cond.',
    'GUI_OUTPUT.TubeControlData.TubeOperationMonitoring_Condition':
        'Tube Operation Monitoring Cond.',
    'GUI_OUTPUT.TubeControlData.TubeLightControl_Condition':
        'Tube Light Control Cond.',
    'GUI_OUTPUT.TubeControlData.Light_Condition[0]': 'Light Cond.',
    'GUI_OUTPUT.TubeControlData.PneumaticPressureSensors_Condition[0]':
        'Pneumatic Pressure Sensors Cond.',
    'GUI_OUTPUT.TubeControlData.TubeDoorSystem_Condition':
        'Tube Door System Cond.',
    'GUI_OUTPUT.PropulsionData.TemperatureArmature_Temperature[0]':
        'Temperature Armature Temp.',
    'GUI_OUTPUT.PropulsionData.TemperatureArmature_Temperature[1]':
        'Temperature Armature Temp.',
    'GUI_OUTPUT.PropulsionData.TemperatureArmature_Temperature[2]':
        'Temperature Armature Temp.',
})

// interior screen
export const interiorTc = writable({
    'GUI_OUTPUT.InteriorControlData.DeadManSwitch_Condition': 'N/A',
    'GUI_OUTPUT.InteriorControlData.DeadManSwitch_Position': 'N/A',
    'GUI_OUTPUT.InteriorControlData.timer': 'N/A',
    'GUI_OUTPUT.InteriorControlData.TempSensorPod_Condition': 'N/A',
    'GUI_OUTPUT.InteriorControlData.TempSensorPod_Temperature': 'N/A',
    'GUI_OUTPUT.InteriorControlData.Gasmaster_Condition': 'N/A',
    'GUI_OUTPUT.InteriorControlData.Gasmaster_CO2Level': 'N/A',
    'GUI_OUTPUT.InteriorControlData.PressureSensor_Condition': 'N/A',
    'GUI_OUTPUT.InteriorControlData.PressureSensor_Pressure': 'N/A',
    'GUI_OUTPUT.InteriorControlData.PodDoor_Condition': 'N/A',
    'GUI_OUTPUT.InteriorControlData.podDoor_Position': 'N/A',
})

export const interiorMappings = writable({
    'GUI_OUTPUT.InteriorControlData.DeadManSwitch_Condition':
        'DeadManSwitch Cond.',
    'GUI_OUTPUT.InteriorControlData.DeadManSwitch_Position':
        'DeadManSwitch Pos.',
    'GUI_OUTPUT.InteriorControlData.timer': 'Dead Man Switch Timer',
    'GUI_OUTPUT.InteriorControlData.TempSensorPod_Condition':
        'TempSensorPod Cond.',
    'GUI_OUTPUT.InteriorControlData.TempSensorPod_Temperature':
        'TempSensorPod Temp.',
    'GUI_OUTPUT.InteriorControlData.Gasmaster_Condition': 'Gasmaster Cond.',
    'GUI_OUTPUT.InteriorControlData.Gasmaster_CO2Level': 'Gasmaster CO2 Level',
    'GUI_OUTPUT.InteriorControlData.PressureSensor_Condition':
        'PressureSensor Cond.',
    'GUI_OUTPUT.InteriorControlData.PressureSensor_Pressure':
        'PressureSensor Pressure',
    'GUI_OUTPUT.InteriorControlData.PodDoor_Condition': 'PodDoor Cond.',
    'GUI_OUTPUT.InteriorControlData.podDoor_Position': 'PodDoor Pos.',
})

// Tube control screen
export const tubeTc = writable({
    'GUI_OUTPUT.TubeControlData.TubeControl_Condition': 'N/A',
    'GUI_OUTPUT.TubeControlData.TubeOperationMonitoring_Condition': 'N/A',
    'GUI_OUTPUT.TubeControlData.HumiditySensor_Condition': 'N/A',
    'GUI_OUTPUT.TubeControlData.TubeVibrationSensor_Condition[0]': 'N/A',
    'GUI_OUTPUT.TubeControlData.TubeLightControl_Condition': 'N/A',
    'GUI_OUTPUT.TubeControlData.Light_Condition[0]': 'N/A',
    'GUI_OUTPUT.TubeControlData.Light_Condition[1]': 'N/A',
    'GUI_OUTPUT.TubeControlData.Light_Condition[2]': 'N/A',
    'GUI_OUTPUT.TubeControlData.TubeDoorSystem_Condition': 'N/A',
    'GUI_OUTPUT.TubeControlData.PneumaticPressureSensors_Condition[0]': 'N/A',
    'GUI_OUTPUT.TubeControlData.PneumaticPressureSensors_Condition[1]': 'N/A',
    'GUI_OUTPUT.TubeControlData.PneumaticPressureSensors_Condition[2]': 'N/A',
    'GUI_OUTPUT.TubeControlData.SolenoidValeRelais_Condition': 'N/A',
})

export const tubeMappings = writable({
    'GUI_OUTPUT.TubeControlData.TubeControl_Condition':
        'Tube Control Condition',
    'GUI_OUTPUT.TubeControlData.TubeOperationMonitoring_Condition':
        'Tube Operation Monitoring',
    'GUI_OUTPUT.TubeControlData.HumiditySensor_Condition': 'Humidity Sensor',
    'GUI_OUTPUT.TubeControlData.TubeVibrationSensor_Condition[0]':
        'Tube Distance Sensor 1',
    'GUI_OUTPUT.TubeControlData.TubeLightControl_Condition': 'Light Sensor',
    'GUI_OUTPUT.TubeControlData.Light_Condition[0]': 'Light 1',
    'GUI_OUTPUT.TubeControlData.Light_Condition[1]': 'Light 2',
    'GUI_OUTPUT.TubeControlData.Light_Condition[2]': 'Light 3',
    'GUI_OUTPUT.TubeControlData.TubeDoorSystem_Condition': 'Tube Door System',
    'GUI_OUTPUT.TubeControlData.PneumaticPressureSensors_Condition[0]':
        'Pneumatic Sensor 1',
    'GUI_OUTPUT.TubeControlData.PneumaticPressureSensors_Condition[1]':
        'Pneumatic Sensor 2',
    'GUI_OUTPUT.TubeControlData.PneumaticPressureSensors_Condition[2]':
        'Pneumatic Sensor 3',
    'GUI_OUTPUT.TubeControlData.SolenoidValeRelais_Condition':
        'Solenoid Relais',
})

// Lev and guidance screen
export const levitationInputsTc = writable({
    'GUI_INPUT.LevNGuideData.OM_origG_DesiredLevDistance': 'N/A',
    'GUI_INPUT.LevNGuideData.OM_origG_DesiredLevVelocity': 'N/A',
    'GUI_INPUT.LevNGuideData.OM_origG_DesiredLevAcceleration': 'N/A',
    'GUI_INPUT.LevNGuideData.OM_origG_DesiredLevTime': 'N/A',
    'GUI_INPUT.LevNGuideData.OM_origG_GuidReferenceYSignal': 'N/A',
    'GUI_INPUT.LevNGuideData.OM_origG_GuidControlOption': 'N/A',
    'GUI_INPUT.LevNGuideData.OM_origG_LevControlOption': 'N/A',
    'GUI_INPUT.LevNGuideData.OM_origG_EnableGuidController': 'N/A',
})

export const levitationInputsMappings = writable({
    'GUI_INPUT.LevNGuideData.OM_origG_DesiredLevDistance':
        'Desired Lev Distance',
    'GUI_INPUT.LevNGuideData.OM_origG_DesiredLevVelocity':
        'Desired Lev Velocity',
    'GUI_INPUT.LevNGuideData.OM_origG_DesiredLevAcceleration':
        'Desired Lev Acceleration',
    'GUI_INPUT.LevNGuideData.OM_origG_DesiredLevTime': 'Desired Lev Time',
    'GUI_INPUT.LevNGuideData.OM_origG_GuidReferenceYSignal':
        'Guidance reference Y signal',
    'GUI_INPUT.LevNGuideData.OM_origG_GuidControlOption': 'Guidance control',
    'GUI_INPUT.LevNGuideData.OM_origG_LevControlOption':
        'Levitation control option',
    'GUI_INPUT.LevNGuideData.OM_origG_EnableGuidController':
        'Enable Guidance Controller',
})

// Tube screen

export const vacuumSensors = writable({
    'GUI_OUTPUT.VacuumControlData.CV_Condition': '0.0',
    'GUI_OUTPUT.VacuumControlData.PPV_Condition': '0.0',
    'GUI_OUTPUT.VacuumControlData.ERV_Condition[0]': '0.0',
    'GUI_OUTPUT.VacuumControlData.ERV_Condition[1]': '0.0',
    'GUI_OUTPUT.VacuumControlData.PressureSensor_Condition': '0.0',
    'GUI_OUTPUT.VacuumControlData.SV750BF_Condition': '0.0',
    'GUI_OUTPUT.VacuumControlData.Gasballastventil_Condition': '0.0',
    'GUI_OUTPUT.VacuumControlData.Saugstutzventil_Condition': '0.0',
    'GUI_OUTPUT.VacuumControlData.WHU2500_Condition': '0.0',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_WarmUpTimer': '00:00:00',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_ShutDownTimer': '00:00:00',
})

export const vacuumMappings = writable({
    'GUI_OUTPUT.VacuumControlData.CV_Condition': 'CV',
    'GUI_OUTPUT.VacuumControlData.PPV_Condition': 'PPV',
    'GUI_OUTPUT.VacuumControlData.ERV_Condition[0]': 'ERV1',
    'GUI_OUTPUT.VacuumControlData.ERV_Condition[1]': 'ERV2',
    'GUI_OUTPUT.VacuumControlData.PressureSensor_Condition': 'Pressure Sens:',
    'GUI_OUTPUT.VacuumControlData.SV750BF_Condition': 'SV750BF',
    'GUI_OUTPUT.VacuumControlData.Gasballastventil_Condition':
        'Gasballastventil',
    'GUI_OUTPUT.VacuumControlData.Saugstutzventil_Condition': 'Saugstutzventil',
    'GUI_OUTPUT.VacuumControlData.WHU2500_Condition': 'WHU2500',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_WarmUpTimer': 'warmUpTimer',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_ShutDownTimer':
        'shutDownTimer',
})

// Main Screen

export const buttonsTc = writable({
    'GUI_INPUT.bDataExchangeWithGUIDone': false,
    'GUI_INPUT.bTurnOffSirens': false,
    'GUI_INPUT.bGoOP': false,
    'GUI_INPUT.bGoBBP': false,
    'GUI_INPUT.bGoIDLE': false,
    'GUI_INPUT.bGoDEINIT': false,
    'GUI_INPUT.bActivateTubeDoorPneumatics': false,
    'GUI_INPUT.bDeactivateTubeDoorPneumatics': false,
    'GUI_INPUT.bDepressurizeTube': false,
    'GUI_INPUT.bRepressurizeTube': false,
    'GUI_INPUT.bOpenPodDoor': false,
    'GUI_INPUT.bClosePodDoor': false,
    'GUI_INPUT.bTestWithHumans': false,
    'GUI_INPUT.bDisengagePodDoor': false,
})

export const pressureButtonTc = writable({
    'GUI_INPUT.lrTargetPressure': '0',
})

export const buttonsTcMappings = writable({
    'GUI_INPUT.bDataExchangeWithGUIDone': 'Write INIT Data',
    'GUI_INPUT.bTurnOffSirens': 'Turn OFF Sirens',
    'GUI_INPUT.bGoOP': 'Go OP',
    'GUI_INPUT.bGoBBP': 'Go BBP',
    'GUI_INPUT.bGoIDLE': 'Go IDLE',
    'GUI_INPUT.bGoDEINIT': 'Go DEINIT',
    'GUI_INPUT.bActivateTubeDoorPneumatics': 'Activate Zylinders',
    'GUI_INPUT.bDeactivateTubeDoorPneumatics': 'Deactivate Zylinders',
    'GUI_INPUT.bDepressurizeTube': 'Depressurize',
    'GUI_INPUT.bRepressurizeTube': 'Repressurize',
    'GUI_INPUT.bOpenPodDoor': 'Open Door',
    'GUI_INPUT.bClosePodDoor': 'Close Door',
    'GUI_INPUT.bTestWithHumans': 'Test with Humans',
    'GUI_INPUT.bDisengagePodDoor': 'Disengage Door',
})

export const sensorsTcMain = writable({
    'GUI_OUTPUT.OrchestrationData.BlueButton_Position[0]': 'N/A',
    'GUI_OUTPUT.OrchestrationData.BlueButton_Position[1]': 'N/A',
    'GUI_OUTPUT.OrchestrationData.BlueButton_Position[2]': 'N/A',
    'GUI_OUTPUT.OrchestrationData.BlueButton_Position[3]': 'N/A',
    'GUI_OUTPUT.OrchestrationData.RedButton_Position': 'N/A',
    'GUI_OUTPUT.OrchestrationData.Sirene_PowerState[0]': 'N/A',
    'GUI_OUTPUT.OrchestrationData.Sirene_PowerState[1]': 'N/A',
    'GUI_OUTPUT.OrchestrationData.WarningLight_PowerState[0]': 'N/A',
    'GUI_OUTPUT.OrchestrationData.WarningLight_PowerState[1]': 'N/A',
})

export const sensorsTcMainMappings = writable({
    'GUI_OUTPUT.OrchestrationData.BlueButton_Position[0]': 'Blue Button OC1',
    'GUI_OUTPUT.OrchestrationData.BlueButton_Position[1]': 'Blue Button OC2',
    'GUI_OUTPUT.OrchestrationData.BlueButton_Position[2]':
        'Blue Button Tube Door',
    'GUI_OUTPUT.OrchestrationData.BlueButton_Position[3]':
        'Blue Button Pod Interior',
    'GUI_OUTPUT.OrchestrationData.RedButton_Position': 'Not-Aus',
    'GUI_OUTPUT.OrchestrationData.Sirene_PowerState[0]': 'Siren 1',
    'GUI_OUTPUT.OrchestrationData.Sirene_PowerState[1]': 'Siren 2',
    'GUI_OUTPUT.OrchestrationData.WarningLight_PowerState[0]':
        'Warning Light 1',
    'GUI_OUTPUT.OrchestrationData.WarningLight_PowerState[1]':
        'Warning Light 2',
})

export const activationTc = writable({
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_ActivationStatus': 'N/A',
    'GUI_OUTPUT.VacuumControlData.prgVacuumControl_ReadyForOperational': 'N/A',
    'GUI_OUTPUT.TubeControlData.prgTubeControl_ActivationStatus': 'N/A',
    'GUI_OUTPUT.TubeControlData.prgTubeControl_ReadyForOperational': 'N/A',
    'GUI_OUTPUT.PropulsionData.prgPropulsion_ActivationStatus': 'N/A',
    'GUI_OUTPUT.PropulsionData.prgPropulsion_ReadyForOperational': 'N/A',
    'GUI_OUTPUT.LevNGuideData.prgLevNGuide_ActivationStatus': 'N/A',
    'GUI_OUTPUT.LevNGuideData.prgLevNGuide_ReadyForOperational': 'N/A',
    'GUI_OUTPUT.InteriorControlData.prgInteriorControl_ActivationStatus': 'N/A',
    'GUI_OUTPUT.InteriorControlData.prgInteriorControl_ReadyForOperational':
        'N/A',
})

// Subsystem for test selector

export const subsystemsTc = writable({
    'GUI_INPUT.bActivateTubeControl': false,
    'GUI_INPUT.bActivateVacuumControl': false,
    'GUI_INPUT.bActivateInteriorControl': false,
    'GUI_INPUT.bActivatePropulsion': false,
    'GUI_INPUT.bActivateLevNGuide': false,
})

export const subsystemsTcMappings = writable({
    'GUI_INPUT.bActivateTubeControl': 'Tube',
    'GUI_INPUT.bActivateVacuumControl': 'Vacuum',
    'GUI_INPUT.bActivateInteriorControl': 'Interior',
    'GUI_INPUT.bActivatePropulsion': 'Propulsion',
    'GUI_INPUT.bActivateLevNGuide': 'Levitation',
})
