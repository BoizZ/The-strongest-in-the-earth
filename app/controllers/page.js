module.exports = async function (ctx, next) {
  ctx.state = {
    title: 'Hello world'
  }

  await ctx.render('index', {})
}