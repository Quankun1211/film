const mongoose = require('mongoose')
const Schema = mongoose.Schema

const admindata = new Schema({
  adminusername: { type: String},
  adminpassword: { type: String }
})

module.exports = mongoose.model('admindata', admindata)