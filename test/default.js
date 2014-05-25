	
	process.env.DEV_SERVICE = true;
	
	var   Class 			= require('ee-class')
		, log 				= require('ee-log')
		, assert 			= require('assert')
		, ServiceManager 	= require('ee-soa-service-manager')
		, Request 			= require('ee-soa-request')
		, Response 			= require('ee-soa-response');



	var   TestService = require('../')
		, service
		, serviceManager;





	describe('The TestService', function(){
		it('should not crash when instantiating dependecies', function(){
			serviceManager = new ServiceManager();
		});

		it('should not crash when instantiated', function(){
			service = new TestService();
		});

		it('should not crashed when addded to the service manager', function(){
			serviceManager.use(service);
		});

		it('should load correctly', function(done){
			serviceManager.onLoad(done);
		});

		it('should respond to a request', function(done){
			 var  request  = new Request()
			 	, response = new Response();

		  	request.setCollection('test');
            request.setAction('list');
            request.setVersion('0.1.0');

            response.on('end', function(status, content){
           	 	assert.equal(JSON.stringify(content), '[{"id":1}]');
           	 	assert.equal(status, response.statusCodes.OK);
           	 	done();
            });

            serviceManager.request(request, response);
		});
	});
	