import { writable } from 'svelte/store'

export const subsystemList = writable([
    'tube',
    'vacuum',
    'interior',
    'propulsion',
    'levitation',
])

export const subsystemToTest = writable({
    tube: false,
    vacuum: false,
    interior: false,
    propulsion: false,
    levitation: false,
})

export const testStatus = writable({
    active: false,
    completed: false,
    failed: false,
    tube: {
        active: false,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 0,
    },
    vacuum: {
        active: false,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 0,
    },
    interior: {
        active: false,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 0,
    },
    propulsion: {
        active: false,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 0,
    },
    levitation: {
        active: false,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 0,
    },
})

export const subsystemNotification = writable({
    tube: false,
    vacuum: false,
    interior: true,
    propulsion: false,
    levitation: false,
})
