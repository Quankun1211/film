const filmModel = require('../models/filmData')

class userController{
  
  async show(req, res, next) {
    try{
      const film = await filmModel.find({}).lean()
      res.render('user', {film})
    }catch(e) {
      next(e)
    }
  }

  async detail(req, res, next) {
    try{
      const film = await filmModel.findById({_id: req.params.id}).lean()
      res.render('detail', {film})
    }catch(e) {
      next(e)
    }
  }

  async search(req, res, next) {
    try{
      
      let film = await filmModel.find({}).lean()
      let filmData = []
      let lowerCaseSearch = req.body.search
      film.forEach((item, index) => {
        if(item.name.toLowerCase().includes(req.body.search) || item.name.includes(req.body.search)) {
          filmData.push(item)
        }
      })
      res.render('search', {filmData})
    }catch(err) {
      next(err)
    }
  }
  
}

module.exports = new userController