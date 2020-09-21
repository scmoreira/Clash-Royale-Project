module.exports = app => {

  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/clans', require('./clans.routes'))
  app.use('/cards', require('./cards.routes'))
  app.use('/profile', require('./profile.routes'))  
}
