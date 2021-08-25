import { create, router as _router, defaults } from 'json-server'
const app = create()
const router = _router('anecdotes.json')
const middlewares = defaults({
  static: './build'
})
const PORT = process.env.PORT || 3000

app.use(middlewares)
app.use(router)

app.listen(PORT, () => {
  console.log('server started on port 3000')
})