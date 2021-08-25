// const jsonServer = require('json-server')
// const app = jsonServer.create()
// const path = require('path')
// const express = require('express')
// const middlewares = jsonServer.defaults()
// const router = jsonServer.router('anecdotes.json')
// const PORT = process.env.PORT || 3000

// app.use('/db', middlewares, router)
// app.use(express.static(path.join(__dirname, 'build')))

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

// app.listen(PORT, () => {
//   console.log('server started on port 3000')
// })


const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('anecdotes.json')
const middlewares = jsonServer.defaults({
  static: './build'
})
const PORT = process.env.PORT || 3000

app.use(middlewares)
app.use(router)

app.listen(PORT, () => {
  console.log('server started on port 3000')
})