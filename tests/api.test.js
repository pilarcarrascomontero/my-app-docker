const request = require('supertest');
const app = require('../src/index');

describe('API básica', () => {
  test('GET / devuelve mensaje y versión', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hola desde my-app!');
  });

  test('GET /time devuelve fecha ISO', async () => {
    const res = await request(app).get('/time');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('now');
  });

  test('GET /healthz ok', async () => {
    const res = await request(app).get('/healthz');
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
