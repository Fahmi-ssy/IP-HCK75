const express = require('express')
const GeminiController = require('../Controllers/GeminiControlles')

const GeminiRouter = express.Router()

GeminiRouter.get('/', GeminiController.gemini)

module.exports = GeminiRouter