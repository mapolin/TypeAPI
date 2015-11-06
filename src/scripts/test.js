var network = require('scripts/ajax');
var dom = require('scripts/element');
var validations = require('scripts/validation');
(function () {
    window.CORE = {
        network: network,
        dom: dom,
        validations: validations
    };
})();
