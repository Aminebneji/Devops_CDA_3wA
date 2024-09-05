const request = require('supertest')
const app = require('../../src/hello')

describe('GET /hello/:name', () => {
  test('It should respond with a welcome message', async () => {
    const name = "amine"
    const response = await request(app).get(`/hello/${name}`)

    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual(`Hello, ${name}`)
  })
})
describe('GET /goodbye/:name', () => {
  test('It should respond with a goodbye message', async () => {
    const name = "amine"
    const response = await request(app).get(`/goodbye/${name}`)

    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual(`Goodbye, ${name}`)
  })
})
