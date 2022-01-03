const { exec } = require('child_process')
const fs = require('fs')



const executePy = (filepath) => {
    
    const output = new Promise((resolve, reject) => {
        exec(`python ${filepath}`,
            (err, stdout, stderr) => {
                if (err) {
                    
                } if (stderr) {
                    resolve(stderr)
                    fs.unlinkSync(filepath)
                } else {
                    
                    resolve(stdout)
                    fs.unlinkSync(filepath)
                    
                }
            })
    })
    
    return output
}

module.exports = {
    executePy
}