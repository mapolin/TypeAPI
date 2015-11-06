var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Imports = require('scripts/core');
var Validator = (function (_super) {
    __extends(Validator, _super);
    function Validator() {
        _super.call(this);
        this.Validators = {};
        this.value = '';
        this.Types = {
            text: /^[A-Za-z]+$/,
            number: /^[0-9]+$/,
            email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        };
        this.UpdateValidators();
    }
    Validator.prototype.getValue = function (input) {
        return (typeof input == 'string') ? input : input.value;
    };
    Validator.prototype.UpdateValidators = function () {
        for (var t in this.Types) {
            this.Validators[t] = (function (exp) {
                return function () {
                    return exp.test(this.value);
                };
            })(this.Types[t]).bind(this);
        }
    };
    Validator.prototype.Validate = function (input) {
        this.value = this.getValue(input);
        return this.Validators;
    };
    Validator.prototype.ValidateAny = function (input) {
        var result = this.Validate(input);
        for (var t in result) {
            if (result[t]())
                return true;
        }
        return false;
    };
    return Validator;
})(Imports.Core);
exports.Validator = Validator;
var ValidatorGroup = (function (_super) {
    __extends(ValidatorGroup, _super);
    function ValidatorGroup(selector) {
        _super.call(this);
        this.group = this.getElem(selector);
    }
    ValidatorGroup.prototype.ValidateAll = function (type) {
        if (type === void 0) { type = false; }
        var result = true;
        this.result = [];
        for (var i = 0; i < this.group.length; i++) {
            var _type = (type || this.group[i].type);
            var value = _super.prototype.getValue.call(this, this.group[i]);
            var _result = this.Validate(value)[_type]();
            this.result.push({
                type: _type,
                value: value,
                elem: this.group[i],
                result: _result
            });
            if (!_result)
                result = _result;
        }
        return result;
    };
    return ValidatorGroup;
})(Validator);
exports.ValidatorGroup = ValidatorGroup;
var ValidationField = (function (_super) {
    __extends(ValidationField, _super);
    function ValidationField(selector) {
        _super.call(this);
        this.field = this.getElem(selector)[0];
    }
    ValidationField.prototype.Validate = function () {
        return _super.prototype.Validate.call(this, this.field);
    };
    ValidationField.prototype.ValidateType = function () {
        return _super.prototype.Validate.call(this, this.field)[this.field.type]();
    };
    ValidationField.prototype.ValidateAny = function () {
        return _super.prototype.ValidateAny.call(this, this.field);
    };
    return ValidationField;
})(Validator);
exports.ValidationField = ValidationField;
