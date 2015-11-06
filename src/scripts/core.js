var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Helper = (function () {
    function Helper() {
    }
    Helper.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    Helper.prototype.setData = function (element, data) {
        if (typeof element == 'string') {
            element = document.querySelectorAll(element);
        }
        for (var i = 0; i < element.length; i++) {
            element[i].setAttribute(data.name, (data.value || ''));
        }
        return element;
    };
    Helper.prototype.getData = function (element, data) {
        if (typeof element == 'string') {
            element = document.querySelector(element);
        }
        return element.getAttribute(data.name);
    };
    Helper.prototype.removeData = function (element, data) {
        if (typeof element == 'string') {
            element = document.querySelector(element);
        }
        var _data = this.getData(element, data);
        element.removeAttribute(data.name);
        return _data;
    };
    Helper.prototype.makefn = function (method) {
        return (typeof method == 'function') ? method : function () { };
    };
    return Helper;
})();
exports.Helper = Helper;
var Core = (function (_super) {
    __extends(Core, _super);
    function Core() {
        _super.call(this);
        this.id = this.guid();
    }
    Core.prototype.protocol = function () {
        return window.location.protocol;
    };
    Core.prototype.toJSON = function (_content) {
        return JSON.parse(_content);
    };
    Core.prototype.toString = function (_json) {
        return JSON.stringify(_json);
    };
    return Core;
})(Helper);
exports.Core = Core;
