const test = require('ava')
const nss = require('../')

test('Should load files', t => {
  return nss()
  .then(files => {
    t.not(0, Object.keys(files).length)
    console.info(files)
  })
})

test.cb('Should load files with a callback', t => {
  nss((error, files) => {
    t.falsy(error)
    t.not(0, Object.keys(files).length)
    t.end()
  })
})
