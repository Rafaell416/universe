const debug = require('debug')('platziverse:db:setup')
module.exports = function (init = true) {
  return {
    database: process.env.DB_NAME || 'universe',
    username: process.env.DB_USER || 'rafaell416',
    password: process.env.DB_PASS || 'psqlp4ssw0rd',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    operatorsAliases: false,
    setup: init
  }
}
