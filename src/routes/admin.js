const express = require('express')
const router = express.Router()
const adminController = require('../controller/adminController')

router.post('/postdata', adminController.postdata)
router.put('/edit/:id', adminController.editData)
router.get('/:id/edit', adminController.edit)
router.get('/create', adminController.create)
router.get('/:id', adminController.render)
router.get('/', adminController.render)

module.exports = router