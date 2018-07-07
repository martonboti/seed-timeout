const faker = require('faker/locale/en');
const { Doc } = require('./../../models/Doc');

// COMPANY SEED
const docs = [{
  name: faker.company.companyName(),
  slug: faker.lorem.slug()
}, {
  name: faker.company.companyName(),
  slug: faker.lorem.slug()
}];

const populateDoc = (done) => {
  Doc.remove({}).then(() => Doc.insertMany(docs)).then(() => done());
};

module.exports = {
  populateDoc
};
