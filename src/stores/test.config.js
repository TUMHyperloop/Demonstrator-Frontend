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
    active: true,
    completed: false,
    failed: false,
    tube: {
        active: true,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 1,
    },
    vacuum: {
        active: true,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 1,
    },
    interior: {
        active: true,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 1,
    },
    propulsion: {
        active: true,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 1,
    },
    levitation: {
        active: true,
        completed: false,
        failed: false,
        stepsTotal: 5,
        stepsCompleted: 1,
    },
})

export const subsystemNotification = writable({
    tube: false,
    vacuum: false,
    interior: true,
    propulsion: false,
    levitation: false,
})
