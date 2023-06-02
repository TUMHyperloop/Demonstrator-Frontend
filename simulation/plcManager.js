const ads = require('ads-client')
const { json } = require('body-parser')
const fs = require('fs')
const path = require('path')

// Single object with preconfigured in client twincat connection data
let plcManager = {
    client: new ads.Client({
        targetAmsNetId: '169.254.113.74.1.1', //192.168.137.95.1.1
        targetAdsPort: 851,
    }),

    subscription: null, // object holding .unsubscribe method

    isConnected: false, // boolean

    // Connects to Twincat system and logs
    async connectToPlc() {
        let readObj = {}

        await this.client
            .connect()
            .then(async (res) => {
                console.log(
                    `Connected to the ${res.targetAmsNetId} Router assigned us AmsNetId ${res.localAmsNetId} and port ${res.localAdsPort}`,
                )

                this.isConnected = true

                readObj.success = true
            })
            .catch(async (err) => {
                console.log(err)
                this.isConnected = false

                readObj.success = false
            })

        return readObj
    },

    // Disconnects from Twincat system - currently disallowed
    async disconnectPlc() {
        let readObj = {}

        await this.client
            .disconnect()
            .then(() => {
                readObj.success = true
            })
            .catch((err) => {
                console.log(err)

                readObj.success = false
                readObj.errorMessage = err
            })

        return readObj
    },

    // Get if the PLC is connected
    async getPlcStatus() {
        console.log('Getting PLC Status\n')

        let readObj = {}

        await Promise.all([
            this.client.readPlcRuntimeState(),
            this.client.readDeviceInfo(),
        ])
            .then(([plcRuntimeState, deviceInfo]) => {
                readObj.success = true

                readObj.plcRuntimeState = plcRuntimeState
                readObj.deviceInfo = deviceInfo
            })
            .catch((err) => {
                console.log(err)

                console.log('getPlcStatus error')

                readObj.success = false
                readObj.errorMessage = err
            })

        return readObj
    },

    // Will read all input and output values from Twincat
    async readValues(symbolsArr) {
        let promises = []
        for (let symbol of symbolsArr) {
            promises.push(this.client.readSymbol(symbol))
        }

        let readObj = {}
        await Promise.all(promises)
            .then((response) => {
                readObj.success = true
                readObj.data = response
            })
            .catch((err) => {
                console.log(err)

                readObj.success = true
                readObj.errorMessage = err
            })

        return readObj
    },

    // write arbitrary prepared object to Runtime
    async writeToPlc(writeObj) {
        // {name: value}

        console.log('Writing values to PLC... \n')

        let readObj = {}
        let promises = []

        for (let key in writeObj) {
            promises.push(this.client.writeSymbol(key, writeObj[key]))
        }

        await Promise.all(promises)
            .then((response) => {
                readObj.status = true
            })
            .catch((err) => {
                console.log(err)

                readObj.status = false
                readObj.errorMessage = err
            })

        return readObj
    },
}

async function main() {
    await plcManager.connectToPlc()
    await plcManager.getPlcStatus()
    // await plcManager.readAllValues();
    // plcManager.startWritingToDatabase();
}

main() //  causes run in the same port

module.exports = { plcManager }
