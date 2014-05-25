# ee-soa-testservice

service used for soa component testing

## installation

	npm install ee-soa-testservice

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-testservice.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-testservice)


## usage

	var   TestService 	= require('ee-soa-testservice')
		, SOARequest 	= require('ee-soa-request')
		, SOAResponse 	= require('ee-soa-response');


	var service = new TestService();

	service.request(new SOARequest(), new SOAResponse());