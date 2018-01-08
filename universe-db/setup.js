'use strict'

const debug = require('debug')('universe:db:setup')
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'universe',
    username: process.env.DB_USER || 'rafaell416',
    password: process.env.DB_PASS || 'psqlp4ssw0rd',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('You hace successfully setup your DB :)')
  process.exit(0)
}

function handleFatalError (err) {
  console.erro(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()
