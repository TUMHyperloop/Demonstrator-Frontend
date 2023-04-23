const ads = require('ads-client')
const { json } = require('body-parser')
const fs = require('fs')
const path = require('path')

// loggs events in the console (shown in node-windows)
function logger(module, func, type, message) {
    // moudle: file where the log is made
    // func: function where the log is made
    // type: type of log (info, error, etc)
    // message: message to be logged (the error if there is one)
    let timestamp = new Date().toISOString()

    console.log(
        `[${timestamp}] \n\t\t module: ${module} \n\t\t function: ${func} \n\t\t type: ${type} \n\t\t message: ${message}`,
    )
}

// Single object with preconfigured in client twincat connection data
let plcManager = {
    client: new ads.Client({
        targetAmsNetId: '169.254.113.74.1.1', //192.168.137.95.1.1
        targetAdsPort: 851,
    }),

    subscription: null, // object holding .unsubscribe method

    // Connects to Twincat system and logs
    async connectToPlc() {
        let readObj = {}

        await this.client
            .connect()
            .then(async (res) => {
                console.log(
                    `Connected to the ${res.targetAmsNetId} Router assigned us AmsNetId ${res.localAmsNetId} and port ${res.localAdsPort}`,
                )

                readObj.success = true
            })
            .catch(async (err) => {
                logger('twincat', 'connectToPlc', 'error', err)

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
                logger('twincat', 'disconnectPlc', 'error', err)

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
                logger('twincat', 'getPlcStatus', 'info', "PLC Status is 'up'")
                readObj.success = true

                readObj.plcRuntimeState = plcRuntimeState
                readObj.deviceInfo = deviceInfo
            })
            .catch((err) => {
                logger('twincat', 'getPlcStatus', 'error', err)
                console.log('getPlcStatus error')

                readObj.success = false
                readObj.errorMessage = err
            })

        return readObj
    },

    // Will read all input and output values from Twincat
    async readAllValues() {
        let readObj = {}

        await Promise.all([
            this.client.readSymbol('GVL_OutputHMI.rCurrentLive'),
            this.client.readSymbol('GVL_OutputHMI.rVoltageLive'),
            this.client.readSymbol('GVL_OutputHMI.rCurrentLast'),
            this.client.readSymbol('GVL_OutputHMI.ST_SensorOutputs'),
            this.client.readSymbol('GVL_OutputHMI.rMotorPosition'),
            this.client.readSymbol('GVL_OutputHMI.rMotorVelocity'),
            this.client.readSymbol('GVL_OutputHMI.rMotorTorque'),
            this.client.readSymbol('GVL_OutputHMI.bMotorFault'),
            this.client.readSymbol('GVL_OutputHMI.uiStatus'),
            this.client.readSymbol('GVL_OutputHMI.sWarning'),
            this.client.readSymbol('GVL_OutputHMI.tElapsedTime'),
            this.client.readSymbol('GVL_OutputHMI.uiMeasurementsFinished'),
            this.client.readSymbol('GVL_OutputHMI.uiOverallMeasurements'),
            this.client.readSymbol('GVL_OutputHMI.rVirtualTemperature'),

            this.client.readSymbol('GVL_InputHMI.e_OperationMode'),
            this.client.readSymbol('GVL_InputHMI.rMinCurrent'),
            this.client.readSymbol('GVL_InputHMI.rMaxCurrent'),
            this.client.readSymbol('GVL_InputHMI.rCurrentStep'),
            this.client.readSymbol('GVL_InputHMI.rMinAirgap'),
            this.client.readSymbol('GVL_InputHMI.rMaxAirgap'),
            this.client.readSymbol('GVL_InputHMI.rAirgapStep'),
            this.client.readSymbol('GVL_InputHMI.bStartButton'),
            this.client.readSymbol('GVL_InputHMI.bEmergencyStop'),
            this.client.readSymbol('GVL_InputHMI.sCSVName'),
            this.client.readSymbol('GVL_InputHMI.tWaitBeforeMeasurement'),
            this.client.readSymbol('GVL_InputHMI.bPause'),

            this.client.readSymbol('GVL_InputHMI.bManualMoveMotor'),
            this.client.readSymbol('GVL_InputHMI.rManualMotorPosition'),
            this.client.readSymbol('GVL_InputHMI.rManualMotorVelocity'),

            this.client.readSymbol('GVL_InputHMI.bDistanceSensorNulling'),
            this.client.readSymbol(
                'GVL_InputHMI.bDistanceSensorNullingPlateRemoved',
            ),
        ])
            .then((response) => {
                console.log('All values were read')
                readObj.success = true

                for (let element of response) {
                    readObj[`${element.symbol.name}`] = element.value
                }
            })
            .catch((err) => {
                console.log('Error when reading all values')

                readObj.success = false
                readObj.errorMessage = err
            })

        return readObj
    },

    // write arbitrary prepared object to Runtime
    async writeToPlc(writeArr) {
        // [{name: '..', value: '...'}] => {name: value}
        const writeObj = writeArr.reduce((result, item) => {
            result[item.name] = item.value
            return result
        }, {})

        console.log('Writing values to PLC... \n')

        let readObj = {}
        let promises = []

        for (let key in writeObj) {
            promises.push(this.client.writeSymbol(key, writeObj[key]))
        }

        await Promise.all(promises)
            .then((response) => {
                readObj.success = true
            })
            .catch((err) => {
                console.log(err)

                readObj.success = false
                readObj.errorMessage = err
            })

        return readObj
    },
}

async function main() {
    // await plcManager.connectToPlc();

    // let resp = await plcManager.writeNullifyDistance(true);
    /* await plcManager.writeStartTest(
    "A1",
    1.0,
    90.21,
    0.1,
    0.5,
    43.21,
    23.21,
    true,
    false,
    "test_49238",
    300,
    false
  );
  let resp = await plcManager.writeManualMotor(false, 0, 0);
  await plcManager.disconnectPlc();  */

    const log = (...args) => {
        console.log(...args)
    }

    // await plcManager.loadDatabase();
    await plcManager.connectToPlc()
    // await plcManager.getPlcStatus();
    // await plcManager.readAllValues();
    // plcManager.startWritingToDatabase();

    plcManager.subscribeToVariable(log)
}

main() //  causes run in the same port

module.exports = { plcManager }
