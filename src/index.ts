import Koa from 'koa'

const server = new Koa()
const PORT = 5551

server.use(async (ctx) => {
  ctx.set('Content-Type', 'text/plain')
  ctx.body = 'node-server'
})

server.listen(PORT, () => {
  console.log(`server started at ${PORT}`)
})