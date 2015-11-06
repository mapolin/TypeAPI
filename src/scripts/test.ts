import network = require('scripts/ajax');
import dom = require('scripts/element');

(function() {
    window.ajaxtest = new network.Ajax();
    window.elementtest = new dom.Element();
})();