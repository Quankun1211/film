const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/search', userController.search)
router.get('/:id', userController.detail)
router.get('/', userController.show)

module.exports = router