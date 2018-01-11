'use strict'

const debug = require('debug')('universe:db:setup')
const db = require('./')
const inquirer = require('inquirer')
const chalk = require('chalk')

const prompt = inquirer.createPromptModule()

async function setup () {
  const force = process.argv.slice(2).pop()
  if (force != '-y') {
    const answer = await prompt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'This will destroy your database, are you really sure???'
      }
    ])

    if (!answer.setup) {
      return console.log('Nothing happend')
    }
  }

  const config = {
    database: process.env.DB_NAME || 'universe',
    username: process.env.DB_USER || 'rafaell416',
    password: process.env.DB_PASS || 'psqlp4ssw0rd',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    operatorsAliases: false,
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('You have successfully setup your DB :)')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
