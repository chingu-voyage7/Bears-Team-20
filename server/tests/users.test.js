import chai from 'chai';
import chaiHttp from 'chai-http';

// import server from "../src/index";

const server = 'www.google.com';
chai.use(chaiHttp);

describe('#google example', () => {
  it('should return the page content', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
