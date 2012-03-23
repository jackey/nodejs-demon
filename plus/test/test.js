var plus = require('../build/default/plus');

describe('Plus', function() {
  it('should has .plus function', function() {
    plus.plus.should.be.a('function');
 });
 it('.plus', function () {
  var number = plus.plus(1, 2);
  number.should.eql(3);
 
  try {
   plus.plus();
  }
  catch(err) {
   err.message.should.eql('Wrong number of arguments');
  }
  
  try {
   var number = plus.plus(1);
  }
  catch(err) {
   err.message.should.eql('Wrong number of arguments');
  }
 })
});