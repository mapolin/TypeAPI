import network = require('scripts/ajax');
import dom = require('scripts/element');
import validations = require('scripts/validation');

(function() {
    window.CORE = {
        network: network,
        dom: dom,
        validations: validations
    };
})();