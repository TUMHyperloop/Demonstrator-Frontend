import { writable } from 'svelte/store'
import { vacuumSensors } from './tcObjects'

export async function readSensorValues(tcArray) {
    console.log(tcArray)

    const tcRes = await fetch('http://localhost:3000/api/read', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            tcArray,
        }),
    })

    return tcRes.json()
}

export async function writeValues(writeObj) {
    const tcRes = await fetch('http://localhost:3000/api/write', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(writeObj),
    })

    return tcRes.json()
}
