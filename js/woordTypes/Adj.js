import Woord from './Woord.js';

export default class Adj extends Woord {
    constructor({ man, vr, onz, vert, type }) {
        super(type);
        this.man = man;
        this.vr = vr;
        this.onz = onz;
        this.vert = vert;
    }

    display() {
        return `<p>${this.man}, ${this.vr}, ${this.onz}: ${this.vert.join(', ')}</p>`;
    }

    check({ vr, onz, vert }) {
        return vr == this.vr && onz == this.onz && this.vert.find(elt => elt == vert);
    }

    createHTML() {
        return `<span>${this.man}, </span>
        <input type="text" autocomplete="off" spellcheck="false" name="${this.vr} (vr)">,
        <input type="text" autocomplete="off" spellcheck="false" name="${this.onz} (onz)">: 
        <input type="text" autocomplete="off" spellcheck="false" name="${this.vert[0]} (vert)">`;
    }

    findIn(list) {
        return list.find(elt => elt.man == this.man);
    }

    findIndex(list) {
        return list.findIndex(elt => elt.man == this.man);
    }

    parseFromForm(form) {
        const data = { man: this.man, vr: form[`${this.vr} (vr)`].value, onz: form[`${this.onz} (onz)`].value, vert: form[`${this.vert[0]} (vert)`].value }
        form[`${this.vr} (vr)`].value = '';
        form[`${this.onz} (onz)`].value = '';
        form[`${this.vert[0]} (vert)`].value = '';
        return data;
    }

    isEqual(man) {
        return this.man == man;
    }
}