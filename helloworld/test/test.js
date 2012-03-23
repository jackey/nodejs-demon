var hello = require('../build/default/helloworld');

describe('Helloworld Addons', function() {
	it('.hello', function () {
		var world = hello.hello();
		world.should.eql('world');
	})
});