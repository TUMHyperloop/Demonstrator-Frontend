import { writable } from 'svelte/store'

export const subsystemConfig = writable({
    tube: [],
    vacuum: [],
    interior: [],
    propulsion: [],
    levitation: [],
})

setTimeout(() => {
    fetchSubsystemData('tube')
    fetchSubsystemData('vacuum')
    fetchSubsystemData('interior')
    fetchSubsystemData('propulsion')
    fetchSubsystemData('levitation')
}, 500)

async function fetchSubsystemData(subsystemName) {
    const response = await fetch(
        `http://localhost:3000/subsystemVars/${subsystemName}`,
    )
    let data = await response.json()

    console.log(data)

    subsystemConfig.update((config) => {
        config[subsystemName] = data
        return config
    })
}

export async function saveSubsystemConfig(subsystemName) {
    let subsysConfig = {}

    subsystemConfig.subscribe((config) => {
        subsysConfig = config[subsystemName]
    })

    const response = await fetch(
        `http://localhost:3000/subsystemVars/${subsystemName}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(subsysConfig),
        },
    )
    const result = await response.json()

    return result
}
