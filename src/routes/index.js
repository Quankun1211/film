const userRouter = require('./userRoute')
const siteRouter = require('./siteRouter')
const adminRouter = require('./admin')

function router(app) {
  app.use('/admin', adminRouter)
  app.use('/user', userRouter)
  app.use('/', siteRouter)
}

module.exports = router