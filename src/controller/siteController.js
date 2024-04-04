const userModel = require('../models/userDB')
const adminModel = require('../models/adminDB')

class SiteController{
  renderHome(req, res, next) {
    res.render('home')
  }
  async submit(req, res, next) {
    try{
      const user = await userModel.create(req.body)
      user.save()
      res.redirect('back')
    }catch(err){
      next(err)
    }
  }

  async login(req, res, next) {

    try{
      const user = await userModel.findOne({username: req.body.username, password: req.body.password})
      const admin = await adminModel.findOne({adminusername: req.body.username, adminpassword: req.body.password})
      if(admin){
        res.redirect('/admin/' + admin._id)
      }else if(user){
        res.redirect('/user')
      }else{
        res.redirect('back')
      }

    }catch(err){
      next(err)
    }
  }

  back(req, res, next) {
    res.redirect('back')
  }
}

module.exports = new SiteController