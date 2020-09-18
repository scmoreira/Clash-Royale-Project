module.exports = app => {

  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/decks', require('./decks.routes'))
  app.use('/cards', require('./cards.routes'))
  app.use('/profile', require('./profile.routes'))  
}
