import Imports = require('scripts/core');

export class Ajax extends Imports.Core {
    constructor() {
        super();
    }

    request(url: string, _data: any, success: any, fail: any) {
        _data = $.extend(_data, { url: url });

        success = this.makefn(success);
        fail = this.makefn(fail);

        $.ajax(_data)
            .done(success.bind(this))
            .fail(fail.bind(this));
    }
}