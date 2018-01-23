'use strict'

/*
 * adonis-framework
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const requireAll = require('require-all')
const path = require('path')
const setup = require('./setup')
process.env.HOST = 'localhost'
process.env.PORT = '3333'

setup()
.then(() => {
  requireAll(path.join(__dirname, './specs'))
})
.catch(console.log)
