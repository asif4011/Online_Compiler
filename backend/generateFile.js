const fs = require('fs')
const path = require('path')
const {v4:uuid}=require('uuid')


const dircodes = path.join(__dirname, 'codes')

//If dir doesn't exixts Create dir
if (!fs.existsSync(dircodes)) {
    fs.mkdirSync(dircodes, {recursive:true})
}

const generateFile = async (format, code) => {
    const jobId = uuid()
    const filename = `${jobId}.${format}`
    const filepath = path.join(dircodes, filename)
    await fs.writeFileSync(filepath, code)
    return filepath
    
}

module.exports = {
    generateFile,
}