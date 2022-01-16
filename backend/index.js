const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { generateFile } = require('./generateFile')
const {executePy} = require('./executePy')
const { removeFile } = require('./removeFile')
const path = require('path')
const app = express()

app.use(bodyParser())
app.use(cors())
app.use(express.static(path.join(__dirname,'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'build','index.html'))
})

app.post('/run', async (req, res) => {
    
    const body = req.body
    const filepath = await generateFile('py', body.code)
    const output = await executePy(filepath)
    //await removeFile(filepath)
    return res.json({"output": output})  
})



app.listen(5000, () => {
    console.log("Running")
})