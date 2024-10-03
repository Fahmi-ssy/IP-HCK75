const express = require('express')
const UserController = require('../Controllers/UserConttoller')

const router = express.Router()
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/auth/google', UserController.googleLogin)    

module.exports = router