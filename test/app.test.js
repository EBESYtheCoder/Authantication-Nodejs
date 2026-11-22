const { test, after } = require('node:test')
const assert = require('node:assert/strict')
const app = require('../app.js')

const server = app.listen(0)
const baseUrl = () => `http://127.0.0.1:${server.address().port}`

after(() => {
  server.close()
})

test('GET / responds with the rendered page', async () => {
  const response = await fetch(baseUrl())
  const body = await response.text()

  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type'), /text\/html/)
  assert.match(body, /Express Demo/)
})

test('GET /unknown responds with 404', async () => {
  const response = await fetch(`${baseUrl()}/unknown`)

  assert.equal(response.status, 404)
})

test('server is bound to an ephemeral port', () => {
  assert.equal(typeof server.address().port, 'number')
})
