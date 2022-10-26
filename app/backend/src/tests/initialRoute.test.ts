import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';


import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste o funcionamento da rota inicial', () => {
  
  it('Verifica se a requisição é realizada com sucesso', async () => {
    const httpResponse = await chai.request(app).get('/');
    expect(httpResponse.body).to.deep.equal({ ok: true});
    expect(httpResponse.body).to.be.a('object');
  });

});
