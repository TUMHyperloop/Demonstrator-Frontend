import { writable } from 'svelte/store'

export const levitationTc = writable({
    'GUI_OUTPUT.LevNGuideData.Heinzinger_ActualVoltage': 0,
    'GUI_OUTPUT.LevNGuideData.Heinzinger_ActualCurrent': 0,
    'GUI_OUTPUT.LevNGuideData.Heinzinger_ActualPower': 0,
    'GUI_OUTPUT.LevNGuideData.Heinzinger_VoltageLimit': 0,
    'GUI_OUTPUT.LevNGuideData.Heinzinger_CurrentLimit': 0,
    'GUI_OUTPUT.LevNGuideData.Heinzinger_PowerLimit': 0,
})

export const pressureTc = writable({
    'GUI_OUTPUT.InteriorControlData.PressureSensor_Pressure': 0,
    'GUI_OUTPUT.VacuumControlData.PressureSensor_Pressure': 0,
})
