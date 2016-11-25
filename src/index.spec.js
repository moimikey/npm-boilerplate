import tap from 'tap'
import { typeov } from 'typeov'

const test = tap.test

test('the truth', t => {
  t.equal(true, true, 'shall be known')
  t.end()
})
