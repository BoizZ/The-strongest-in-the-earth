const router = require('koa-router')()
const index = require('./controllers/page')

router.get('/', index)

module.exports = router