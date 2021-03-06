import Woord from './Woord.js';

export default class Subs extends Woord {
    constructor({ nom, gen, vert, geslacht, type }) {
        super(type);
        this.nom = nom;
        this.gen = gen;
        this.vert = vert;
        this.geslacht = geslacht;
    }

    display() {
        return `<p>${this.nom}, ${this.gen}: ${this.vert.join(', ')} (${this.geslacht})</p>`;
    }

    check({ gen, vert, geslacht }) {
        return gen == this.gen && this.vert.find(v => v == vert) && this.geslacht == geslacht;
    }

    createHTML() {
        return `<span>${this.nom}, </span>
        <input type="text" autocomplete="off" spellcheck="false" name="${this.gen} (gen)">: 
        <input type="text" autocomplete="off" spellcheck="false" name="${this.vert[0]} (vert)">
        <input type="radio"  value="m" name="${this.nom} (geslacht)" checked> m
        <input type="radio" value="v" name="${this.nom} (geslacht)"> v
        <input type="radio" value="o" name="${this.nom} (geslacht)"> o`;
    }

    findIn(list) {
        return list.find(elt => elt.nom == this.nom);
    }

    findIndex(list) {
        return list.findIndex(elt => elt.nom == this.nom);
    }

    parseFromForm(form) {
        const data = { nom: this.nom, gen: form[`${this.gen} (gen)`].value, vert: form[`${this.vert[0]} (vert)`].value, geslacht: form[`${this.nom} (geslacht)`].value };
        form[`${this.gen} (gen)`].value = '';
        form[`${this.vert[0]} (vert)`].value = '';
        form[`${this.nom} (geslacht)`].value = 'm';
        return data;
    }

    isEqual(nom) {
        return this.nom == nom;
    }
}