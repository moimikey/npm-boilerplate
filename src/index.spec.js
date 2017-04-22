/* @flow */

const tap = require('tap')

const test = tap.test

test('the truth', t => {
  t.cheese.t()
  t.equal(true, true, 'shall be known')
  t.end()
})
