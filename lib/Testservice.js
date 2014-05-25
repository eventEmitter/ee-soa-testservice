!function() {
    'use strict';

    var   Class     = require('ee-class')
        , Service 	= require('ee-soa-service');


    module.exports = new Class({
        inherits: Service

        , name: 'testService'

        , init: function init(options) {
            this.serviceDir = __dirname.substr(0, __dirname.lastIndexOf('/')+1);
            init.super.call(this, options);
        }
    });

}();