const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000
const router = require('./routes')
const db = require('./mongo/config/index')
const methodOverride = require('method-override')


//Config parser json body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

// Handlebars
app.engine('hbs', hbs.engine({
  extname:'.hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}))
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Static file
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static('/public'))

//Router
router(app)

//Override
// app.use(methodOverride('X-HTTP-Method-Override'))

//Connect MongoDb
db.connect()
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

