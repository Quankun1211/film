const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000
const router = require('./routes')
const db = require('./mongo/config/index')
const methodOverride = require('method-override')
const serverless = require("serverless-http")


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
// router(app)
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

//Override
// app.use(methodOverride('X-HTTP-Method-Override'))

//Connect MongoDb
db.connect()
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

module.exports.handler = serverless(app);
