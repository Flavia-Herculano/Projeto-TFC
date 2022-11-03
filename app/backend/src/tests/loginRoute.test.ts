import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';


import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const bodyUser = { email: 'carlos@email.com', password: 'senhaSecreta'};

describe('Teste o funcionamento da rota login', () => {
  
  it('Verifica se a requisição é realizada com sucesso', async () => {
    const httpResponse = await chai.request(app).post('/login').send(bodyUser);
    expect(httpResponse).to.have.status(200);
    expect(httpResponse.body).to.be.an('object');
  });

});