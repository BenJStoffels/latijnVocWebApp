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

    check({ gen, vert, geslacht }) {}

    createHTML(form) {
        const div = document.createElement('div');
        div.className = 'woordForm';
        div.innerHTML = `<span>${this.nom}, </span>
        <input type="text" name=${this.gen}>
        <input type="text" name=${this.vert[0]}
        <input type="radio" name=${this.nom}> m
        <input type="radio" name=${this.nom}> v
        <input type="radio" name=${this.nom}> 0`;

        form.appendChild(div);
    }
}