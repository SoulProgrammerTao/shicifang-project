const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()



nunjucks.configure(path.join(__dirname, './view/') , {
  autoescape: true,
  express: app,
  watch: true
})


app.get('/', (req, res, next) => {
  // res.status(200).send('hello world11')
  res.render('index.html', {
    fool: 'bar'
  })
})

app.listen(3000, () => {
  console.log('服务启动成功')
  console.log('http://localhost:3000')
})