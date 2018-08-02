const express = require('express')
const app = express()

require('./config/appConfig')(app, express)
require('./hanlders')(app)
