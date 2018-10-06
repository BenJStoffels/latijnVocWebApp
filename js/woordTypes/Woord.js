export default class Woord {
    constructor(type) {
        this.type = type;
    }

    check() {
        console.warn('unhandled check call at', this.type);
        return false;
    }

    display() {
        return `<p>${this.type}</p>`;
    }

    createHTML() {
        console.warn('unhandled createHTML call at', this.type);
        return `<p>error</p>`
    }

    findIn(list) {
        return false;
    }

    parseFromForm(form) {
        console.warn('unhandled parse call!');
        return {};
    }

    isEqual() {
        return false;
    }
}