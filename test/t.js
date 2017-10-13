describe('tests', function () {
  it('assert is ok',
     () => assert(true));

  it('should is ok',
     () => assert('s'.should.be.equal('s')));

  it('sinon is ok',
     () => assert(sinon));

  it('expect is ok',
     () => expect(1).to.equal(1));

  it('chai-things is ok',
     () => {
       ([0,2]).should.all.not.to.equal(1);
       ([1,1]).should.all.to.equal(1);
     });

  it('chai-sinon',
     () => {
       const proxy = sinon.spy();
       proxy();
       assert(proxy.should.be.called);
     });
});
