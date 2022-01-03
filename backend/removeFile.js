const fs = require('fs')

const removeFile = (filepath) => {
    fs.unlinkSync(filepath)
}

module.exports = {
    removeFile,
}