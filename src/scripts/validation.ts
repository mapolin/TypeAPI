import Imports = require('scripts/core');

export class Validator extends Imports.Core {
    private Validators: any = {};
    private value: string = '';

    constructor() {
        super();
        
        this.UpdateValidators();
    }

    public getValue(input: any) {
        return (typeof input == 'string') ? input : input.value;
    }

    public Types: any = {
        text: /^[A-Za-z]+$/,
        number: /^[0-9]+$/,
        email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    }

    public UpdateValidators() {
        for (var t in this.Types) {
            this.Validators[t] = (function(exp) {
                return function() {
                    return exp.test(this.value);
                }
            })(this.Types[t]).bind(this);
        }
    }

    public Validate(input: any) {
        this.value = this.getValue(input);
        return this.Validators;
    }

    public ValidateAny(input: any) {
        var result = this.Validate(input);
        
        for (var t in result) {
            if (result[t]()) return true;
        }

        return false;
    }
}

export class ValidatorGroup extends Validator {
    public result: {}[];
    public group: any;

    constructor(selector: any) {
        super();

        this.group = this.getElem(selector);
    }

    public ValidateAll(type: any = false) {
        var result: boolean = true;
        this.result = [];

        for (var i = 0; i < this.group.length; i++) {
            var _type: string = (type || this.group[i].type);
            var value: any = super.getValue(this.group[i]);
            var _result: boolean = this.Validate(value)[_type]();

            this.result.push({
                type: _type,
                value: value,
                elem: this.group[i],
                result: _result
            });

            if (!_result) result = _result;
        }

        return result;
    }
}

export class ValidationField extends Validator {
    public field: any;

    constructor(selector: any) {
        super();

        this.field = this.getElem(selector)[0];
    }

    public Validate() {
        return super.Validate(this.field);
    }

    public ValidateType() {
        return super.Validate(this.field)[this.field.type]();
    }

    public ValidateAny() {
        return super.ValidateAny(this.field);
    }
}