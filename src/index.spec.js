import * as tap from 'tap'
const describe = tap.test
const eventuallyTrue = () => new Promise(resolve => setTimeout(resolve(true), 1333.666))
const eventuallyFalse = () => new Promise(resolve => setTimeout(resolve(false), 666.333))
describe('PACKAGE_NAME', i => {
  const it = i.test
  it('Logic', async t => {
    t.plan(2)
    t.equal(await eventuallyTrue(), true, 'will eventually be true')
    t.equal(await eventuallyFalse(), false, 'will eventually be false')
    t.end()
  })
  i.end()
})
