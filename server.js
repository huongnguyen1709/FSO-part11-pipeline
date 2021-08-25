const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('anecdotes.json')
const middlewares = jsonServer.defaults({
  static: './build'
})
const PORT = process.env.PORT || 3000

app.use(middlewares)
app.use(jsonServer.rewriter({
  '/api/anecdotes': '/anecdotes'
}))
app.use(router)

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('a new version deployed')
})

app.listen(PORT, () => {
  console.log('server started on port 3000')
})