const mongoose = require('mongoose')

async function connect(){
  try{
    await mongoose.connect('mongodb://localhost:27017/film')
    console.log("Connect successful");
  }catch(err) {
    console.log("Connection error");
  }
}
module.exports = { connect }