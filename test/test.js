var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Teste', function() {
  it('Teste basico', function(done) {
    chai.request(app)
      .get('/teste')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('Obtendo todos os objetos de dados', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body[0].should.have.property('id');
        res.body[0].should.have.property('tipo');
        res.body[0].should.have.property('descricao');
        res.body[0].id.should.equal('1');
        res.body[0].tipo.should.equal('1');
        res.body[0].descricao.should.equal('Um teste');
        res.body[1].should.have.property('id');
        res.body[1].should.have.property('tipo');
        res.body[1].should.have.property('descricao');
        res.body[1].id.should.equal('2');
        res.body[1].tipo.should.equal('2');
        res.body[1].descricao.should.equal('Outro teste');
        done();
      });
  });


//  it('should list a SINGLE blob on /blob/<id> GET');
//  it('should add a SINGLE blob on /blobs POST');
//  it('should update a SINGLE blob on /blob/<id> PUT');
//  it('should delete a SINGLE blob on /blob/<id> DELETE');
});

