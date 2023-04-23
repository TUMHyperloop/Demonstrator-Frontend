import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import fs from 'fs'

// get the path to the current directory
const currentDirectoryPath = path.dirname(process.argv[1])

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

app.get('/subsystemVars/:subsystemName', (req, res) => {
    const subsystemName = req.params.subsystemName

    // get the path to the interiorParams.json file
    const filePath = path.join(
        currentDirectoryPath,
        `${subsystemName}Vars.json`,
    )

    // read the contents of the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        let reqBody = JSON.parse(data)

        if (err) {
            console.error(err)
            res.status(500).send({ error: err })
        } else {
            res.json(reqBody)
        }
    })
})

app.post('/subsystemVars/:subsystemName', (req, res) => {
    const subsystemName = req.params.subsystemName

    // array of config vars
    const vars = req.body

    console.log(vars)

    // get the path to the interiorParams.json file
    const filePath = path.join(
        currentDirectoryPath,
        `${subsystemName}Vars.json`,
    )

    fs.writeFile(filePath, JSON.stringify(vars), 'utf8', (err) => {
        if (err) {
            res.status(500).send({ error: err })
            throw err
        } else {
            // variables were saved
            res.status(200).send({ message: 'Variables saved successfully' })
        }
    })
})
