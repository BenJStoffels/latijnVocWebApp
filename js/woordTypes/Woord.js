export default class Woord {
    constructor(type) {
        this.type = type;
    }

    check() {
        console.warn('unhandled check call at', this.type);
    }

    display() {
        return `<p>${this.type}</p>`;
    }

    createHTML() {
        console.warn('unhandled createHTML call at', this.type);
    }

    findIn(list) {
        return false;
    }
}