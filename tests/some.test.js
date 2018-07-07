const { app } = require('./../app');
const { populateDoc } = require('./seed/seed');

before(populateDoc);

describe('GET /', () => {
  it('should do nothing', (done) => {
    done();
  });
});
