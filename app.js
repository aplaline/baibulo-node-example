#!/usr/bin/env node

const app = require('express')()
const baibulo  = require('baibulo')

app.use(baibulo({ root: '/tmp/baibulo' }))

app.get('/data', (req, res) => {
  res.json({ message: 'Hello, world!' })
})

app.listen(3000, () => {
  console.log("Listening for requests on ports 3000")
})
