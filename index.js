const os = require('os')
const fs = require('fs')
const path = require('path')
const DIR = path.resolve(path.join(__dirname, os.type().toLowerCase()))

const promise = new Promise((resolve, reject) => {
  fs.readdir(DIR, (error, files) => {
    if (error) {
      return reject(error)
    }

    const output = {}

    files
    .filter(file => file.substring(0, 3) !== 'lib')
    .forEach(file => {
      output[file] = path.join(DIR, file)
    })

    resolve(output)
  })
})

module.exports = callback => {
  if (callback) {
    return promise
    .then(results => callback(null, results))
    .catch(error => callback(error))
  }

  return promise
}
