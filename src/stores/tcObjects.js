import { writable } from 'svelte/store'

export const vacuumSensors = writable({
    TcVar1: 'Closed',
    TcVar2: '0.0',
    TcVar3: '0.0',
    TcVar4: '0.0',
    TcVar5: '0.0',
    TcVar6: '0.0',
    TcVar7: '0.0',
    TcVar8: '0.0',
    TcVar9: '0.0',
    TcVar10: '00:00:00',
    TcVar11: '00:00:00',
})

export const vacuumMappings = writable({
    TcVar1: 'CV',
    TcVar2: 'PPV',
    TcVar3: 'ERV1',
    TcVar4: 'ERV2',
    TcVar5: 'Pressure Sens:',
    TcVar6: 'SV750BF',
    TcVar7: 'Gasballastventil',
    TcVar8: 'Saugstutzventil',
    TcVar9: 'WHU2500',
    TcVar10: 'warmUpTimer',
    TcVar11: 'shutDownTimer',
})

export const buttonsTc = writable({
    tcInit: false,
    tcSirens: false,
    tcGoOp: false,
    tcGoBbp: false,
    tcGoIdle: false,
    tcGoDeinit: false,
    tcActivateZylinders: false,
    tcDeactivateZylinders: false,
    tcDepressurize: false,
    tcRepressurize: false,
    tcTargetPressure: '8',
})

export const buttonsTcMappings = writable({
    tcInit: 'Write INIT Data',
    tcSirens: 'Turn OFF Sirens',
    tcGoOp: 'Go OP',
    tcGoBbp: 'Go BBP',
    tcGoIdle: 'Go IDLE',
    tcGoDeinit: 'Go DEINIT',
    tcActivateZylinders: 'Activate Zylinders',
    tcDeactivateZylinders: 'Deactivate Zylinders',
    tcDepressurize: 'Depressurize',
    tcRepressurize: 'Repressurize',
})
