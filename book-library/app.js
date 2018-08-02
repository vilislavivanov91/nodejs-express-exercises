const express = require('express')
const app = express()

require('./config/appConfig')(app)
require('./hanlders')(app)
