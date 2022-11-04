import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import LoginService from '../services/loginService';
import * as mockData from './mockData/index';

import { isStringObject } from 'util/types';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste o funcionamento da rota login', () => {
  before (async () => {
    sinon.stub(LoginService.prototype, 'findLogin').resolves(mockData.post.mock as any);
  });

  after (() => {
    (LoginService.prototype.findLogin as sinon.SinonStub).restore();
  })
  
  it('Verifica se a requisição é realizada com sucesso', async () => {
    const { status, body } = await chai.request(app).post('/login');
    console.log(await (await chai.request(app).post('/login')).text);
      /* expect(status).to.be.equal(200); */
      expect(body).to.be.a('object');
  });

});


