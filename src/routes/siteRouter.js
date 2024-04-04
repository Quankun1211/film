const express = require('express')
const router = express.Router()
const siteController = require('../controller/siteController')

router.post('/submit', siteController.submit)
router.post('/login', siteController.login)
router.get('/', siteController.renderHome)

module.exports = router