const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const { plcManager } = require('./plcManager')

// get the path to the current directory
const currentDirectoryPath = path.dirname(process.argv[1])

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

app.post('/api/read', async (req, res) => {
    const tcArray = req.body.tcArray
    console.log('Read request for: ', tcArray)

    await plcManager.readValues(tcArray).then((data) => {
        console.log('Read data: ', data)
        res.json(data)
    })
})

app.post('/api/write', async (req, res) => {
    const writeObj = req.body
    console.log(writeObj)

    await plcManager.writeValues(writeObj).then((data) => {
        console.log('Write data: ', data)
        res.json(data)
    })
})

app.post('/api/connect', async (req, res) => {
    console.log('request for connection')

    await plcManager.connectToPlc().then((data) => {
        console.log('Connected: ', data)
        res.json(data)
    })
})

app.get('/api/isConnected', (req, res) => {
    console.log('request for connection status')

    res.json(plcManager.isConnected)
})
