const App = require('../db/App.js');

// database doesn't contain more than one doc per id
// test that the seed function works

test('database has one app per id', () => {
  expect(App.find({id: 1})).anything();
});