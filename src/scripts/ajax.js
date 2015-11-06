var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Imports = require('scripts/core');
var Ajax = (function (_super) {
    __extends(Ajax, _super);
    function Ajax() {
        _super.call(this);
    }
    Ajax.prototype.request = function (url, _data, success, fail) {
        _data = $.extend(_data, { url: url });
        success = this.makefn(success);
        fail = this.makefn(fail);
        $.ajax(_data)
            .done(success.bind(this))
            .fail(fail.bind(this));
    };
    return Ajax;
})(Imports.Core);
exports.Ajax = Ajax;
