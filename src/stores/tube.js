import { writable } from 'svelte/store'

// maps {state: {transitionVariable: targetValue}} or
// {state: {subsystem : {subsystemTransitionVar: targetValue}}}

async function getTubeDefinition(subsystem) {
    const response = await fetch('http://localhost:3000/subsystem/' + subsystem)
    if (!response) return []
    const data = await response.json()
    return data
}

let tubeSteps = []
let vacuumSteps = []
let interiorSteps = []
let propulsionSteps = []
let levitationSteps = []

setInterval(async () => {
    tubeSteps = await getTubeDefinition('tube')
    vacuumSteps = await getTubeDefinition('vacuum')
    interiorSteps = await getTubeDefinition('interior')
    propulsionSteps = await getTubeDefinition('propulsion')
    levitationSteps = await getTubeDefinition('levitation')

    allSteps.update((steps) => {
        steps.tube = tubeSteps
        steps.vacuum = vacuumSteps
        steps.interior = interiorSteps
        steps.propulsion = propulsionSteps
        steps.levitation = levitationSteps
        return steps
    })
}, 1000)

export const allSteps = writable({
    tube: [],
    vacuum: [],
    interior: [],
    propulsion: [],
    levitation: [],
})
