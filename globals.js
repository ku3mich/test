const chai = require("chai");
const sinon = require("sinon");

chai.should();
chai.use(require("sinon-chai"));

Object.assign(global, {
  assert : chai.assert,
  sinon : sinon,
  should : chai.should,
  expect : chai.expect
});

              

