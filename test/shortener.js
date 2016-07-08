'use strict';

const qs = require('querystring')
  , request = require('supertest')
  , app = require('express')();

app.use(require('../lib/router'));

describe('URL Shortener', () => {

  it('Should shortener an URL and give me a working redirection URL', done => {

    const GOOGLE = 'https://google.com';

    request(app)
      .get(`/new/${qs.escape(GOOGLE)}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        res.body.should.have.property('original_url');
        res.body.should.have.property('short_url');
        // just to be sur it's shorter ;)
        const id = res.body.short_url.split('/').pop().trim();
        GOOGLE.length.should.be.above(id.length);
        res.body.original_url.should.be.equal(GOOGLE);
        // let's check the redirection
        request(app)
          .get(`/${id}`)
          .expect(302)
          .expect('Location', GOOGLE)
          .end(done);
      });

  });

});
