const filmModel = require('../models/filmData')
const adminModel = require('../models/adminDB')

class adminController{
  
  async render(req, res, next) {
    try{
      const filmData = await filmModel.find({}).lean()
      res.render('admin/mainpage', {filmData})
    }catch(err) {
      next(err)
    }
  }

  async create(req, res, next) {
    try{
      const admin = await adminModel.find({}).lean()
      console.log(admin)
      res.render('admin/create', {admin})
    }catch(err) {
      next(err)
    }
  }

  async postdata(req, res, next) {
    try{
      const film = await filmModel.create(req.body)
      film.save()
      res.redirect('back')
    }catch(err){
      next(err)
    }
  }

  async edit(req, res, next) {
    try{
      const film = await filmModel.findById({_id: req.params.id}).lean()
      res.render('admin/edit', {film})
    }catch(err){
      next(err)
    }
  }

  async editData(req, res, next) {
    await filmModel.updateOne({_id: req.params.id}, req.body)
    res.redirect('/admin/')
  }
  
}

module.exports = new adminController