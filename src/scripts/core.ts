export interface DOM_DATA {
    name?: any;
    value?: any;
}

export class Helper {
    constructor() {
        return this;
    }

    public guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    public setData(element: any, data: DOM_DATA) {
        if(typeof element == 'string') {
            element = document.querySelectorAll(element);
        }

        for (var i = 0; i < element.length; i++) {
            element[i].setAttribute(data.name, (data.value || ''));
        }

        return element;
    }

    public getData(element: any, data: DOM_DATA) {
        element = this.getElem(element);

        return element.getAttribute(data.name);
    }

    public removeData(element: any, data: DOM_DATA) {
        element = this.getElem(element);

        var _data = this.getData(element, data);
        element.removeAttribute(data.name)
        
        return _data;
    }

    public makefn(method: any) {
        return (typeof method == 'function') ? method : function(){};
    }

    public getElem(selector: any) {
        return (typeof selector == 'string') ? document.querySelectorAll(selector) : selector;
    }
}

export class Core extends Helper {
    public id: string;

    constructor() {
        super();

        this.id = this.guid();
    }

    protocol() {
        return window.location.protocol;
    }

    toJSON(_content: string) {
        return JSON.parse(_content);
    }

    toString(_json: JSON) {
        return JSON.stringify(_json);
    }
}
