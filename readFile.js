const fs = require('fs')

module.exports = function readFile(file, enc = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(file, enc, (err, content) => {
      if(err) {
        reject(err)
      } else {
        resolve(content)
      }
    })
  })
}
