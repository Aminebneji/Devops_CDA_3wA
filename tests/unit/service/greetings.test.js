const { greet, bye } = require('../../../service/greetings')

describe('testing greetings', () => {
  test('return a welcome message', () => {
    const name = "amine"
    expect(greet(name)).toBe(`Hello, ${name}`)
  })

  it('return a goodbye message', () => {
    const name = "amine"
    expect(bye(name)).toBe(`Goodbye, ${name}`)
  })
})
