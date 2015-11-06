var Imports = require('scripts/core');
var Element = (function () {
    function Element(type, id, cls, attributes) {
        if (id === void 0) { id = ''; }
        if (cls === void 0) { cls = 'dom-element'; }
        if (attributes === void 0) { attributes = {}; }
        this._helper = new Imports.Helper();
        this._id = this._helper.guid();
        this.domElement = document.createElement(type);
        this.domElement.id = id;
        this.domElement.classList.add(cls);
        for (var att in attributes) {
            this.domElement.setAttribute(att, attributes[att]);
        }
        return this;
    }
    Element.prototype.appendTo = function (element) {
        element = this.getElem(element);
        for (var i = 0; i < element.length; i++) {
            element[i].appendChild(this.domElement);
        }
        return this;
    };
    Element.prototype.append = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            this.domElement.appendChild(elements[i]);
        }
        return this;
    };
    Element.prototype.remove = function (perserve) {
        if (perserve === void 0) { perserve = false; }
        this.domElement.remove();
        if (perserve === false) {
            this.domElement = null;
            this._id = null;
        }
        return this;
    };
    return Element;
})();
exports.Element = Element;
