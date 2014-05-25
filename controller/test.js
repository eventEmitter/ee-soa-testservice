!function() {
    'use strict';

    var   Class                 = require('ee-class')
        , DefaultController     = require('ee-soa-service').DefaultController;


    
    module.exports = new Class({
        inherits: DefaultController

        , init: function init(options) {
            init.super.call(this, options);
        }

        , list: function(request, callback) {
            callback(null, [{id:1}]);
        }
    });
}();
