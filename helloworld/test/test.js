var hello = require('../build/default/helloworld');

describe('Helloworld module', function() {
 it('should has .hello function', function () {
  hello.should.have.property('hello');
 });
 
 it('.hello', function () {
  var world = hello.hello();
  world.should.eql('world');
 })
});