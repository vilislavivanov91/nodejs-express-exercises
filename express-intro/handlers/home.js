const express = require('express')
const homeRouter = express.Router()

homeRouter.route('/')
  .get((req, res) => {
    res.send('Hello from home handler')
  })

module.exports = homeRouter
