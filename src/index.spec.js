import * as tap from 'tap'
const it = tap.test
const eventuallyTrue = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(true), 100)
  })
it('is true', async t => {
  t.equal(await eventuallyTrue(), true)
  t.end()
})
