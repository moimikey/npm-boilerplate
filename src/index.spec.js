import * as tap from 'tap'
const describe = tap.test
const eventuallyTrue = () => new Promise(resolve => setTimeout(resolve(true), 1333.666))
describe('can nest', i => {
  const it = i.test
  it('is true', async t => {
    t.equal(await eventuallyTrue(), true)
    t.end()
  })
  i.end()
})
