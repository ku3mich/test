describe('tests', function () {
  it('assert is ok',
     () => assert(true));

  it('should is ok',
     () => assert('s'.should.be.equal('s')));

  it('sinon is ok',
     () => assert(sinon));
});
