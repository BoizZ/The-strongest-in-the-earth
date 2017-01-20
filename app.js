const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const bodyparse = require('koa-bodyparser')()

const index = require('./app/router')

app.use(convert(bodyparse))
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/app/views', {
  extension: 'pug'
}))

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

router.use('/', index.routes(), index.allowedMethods())

app.use(router.routes(), router.allowedMethods())

module.exports = app