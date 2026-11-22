const express = require('express')
const indexRouter = require('./routes/index.js')

const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/', indexRouter)

if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Express is listening on port ${port}`)
  })
}

module.exports = app
