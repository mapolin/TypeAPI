import Imports = require('scripts/core');

export class Element {
    public domElement: any;
    private _id: string;

    private _helper: any = new Imports.Helper();

    constructor(type: string, id: string = '', cls: string = 'dom-element', attributes: {} = {}) {
        this._id = this._helper.guid();

        this.domElement = document.createElement(type);
        this.domElement.id = id;
        this.domElement.classList.add(cls);

        for(var att in attributes) {
            this.domElement.setAttribute(att, attributes[att]);
        }

        return this;
    }

    appendTo(element: any) {
        element = this.getElem(element);

        for (var i = 0; i < element.length; i++) {
            element[i].appendChild(this.domElement);
        }

        return this;
    }

    append(elements: any) {
        for (var i = 0; i < elements.length; i++) {
            this.domElement.appendChild(elements[i]);
        }

        return this;
    }

    remove(perserve: boolean = false) {
        this.domElement.remove();

        if (perserve === false) {
            this.domElement = null;
            this._id = null;
        }

        return this;
    }
}