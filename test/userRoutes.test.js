// tests/routes/userRoutes.test.js

const http = require('http');
const app = require('../src/routes/appexpress'); // Ajuste o caminho conforme necessário

// Função para criar uma instância de servidor para os testes
const createServer = () => http.createServer(app);

const request = (method, url, data = null) => {
  return new Promise((resolve, reject) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const req = http.request(url, options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body: responseData });
      });
    });

    req.on('error', (e) => reject(e));

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
};

// Mock do modelo User
jest.mock('../src/models/models', () => ({
  User: {
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe('User Routes', () => {
  let server;

  beforeAll(() => {
    server = createServer();
    server.listen(3000);
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    jest.clearAllMocks(); // Limpa os mocks antes de cada teste
  });

  test('GET / Iniciando..', async () => {
    const { statusCode, body } = await request('GET', 'http://localhost:3000/');
    expect(statusCode).toBe(200);
    expect(body).toBe('Olá, mundo');
  });

  test('GET /v1/user/1', async () => {
    const user = [{ id: '1', name: 'Gabriel' }];
    const { User } = require('../src/models/models');
    User.findAll.mockResolvedValue(user);

    const Id = 1
    const { statusCode, body } = await request('GET', `http://localhost:3000/v1/user/${Id}`);
    expect(statusCode).toBe(200);
    expect(JSON.parse(body)).toEqual(user);
  });

  test('POST /v1/user', async () => {
    const newUser = { id: '2', name: 'Laura' };
    const { User } = require('../src/models/models');
    User.create.mockResolvedValue(newUser);

    const { statusCode, body } = await request('POST', 'http://localhost:3000/v1/user', newUser);
    expect(statusCode).toBe(201);
    expect(JSON.parse(body)).toEqual(newUser);
  });

  test('PUT /v1/user/1', async () => {
    const updatedUser = [1]; // Sequelize retorna o número de linhas afetadas
    const { User } = require('../src/models/models');
    User.update.mockResolvedValue(updatedUser);

    const { statusCode, body } = await request('PUT', 'http://localhost:3000/v1/user/1', { name: 'Gabriel Updated' });
    expect(statusCode).toBe(200);
    expect(JSON.parse(body)).toEqual(updatedUser);
  });

  test('DELETE /v1/user/1', async () => {
    const { User } = require('../src/models/models');
    User.destroy.mockResolvedValue(1); // Supondo que uma linha foi deletada
    
    const { statusCode, body } = await request('DELETE', 'http://localhost:3000/v1/user/1');
    expect(statusCode).toBe(200);
    expect(body).toBe('deletei com sucesso');
  });
});
