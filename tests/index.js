async function getVars() {
    let res = await fetch('http://localhost:3000/subsystemVars/interior', {
        method: 'GET',
    })

    if (res.status !== 200) {
        console.log('Error getting vars')
        return
    }

    res = await res.json()

    console.log(res)
}

async function saveVars() {
    let varsToSave = [
        {
            name: 'MAIN.GVL.interior',
            value: 'false',
        },
        {
            name: 'MAIN.GVL.interior',
            value: 'false',
        },
        {
            name: 'MAIN.GVL.interior',
            value: 'false',
        },
    ]

    console.log(JSON.stringify(varsToSave))

    let res = await fetch('http://localhost:3000/subsystemVars/interior', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(varsToSave),
    })

    if (res.status !== 200) {
        console.log('Error saving vars')
        return
    }

    console.log('Saved successfully')
}

saveVars()
