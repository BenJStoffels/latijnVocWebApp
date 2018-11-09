export function changeCurrentWords() {
    const checkedtoggle = document.querySelector('label.switch').querySelector('input')
    if (checkedtoggle.checked && this.mainWindow.selected.length != 0) {
        this.curwords = this.mainWindow.selected;
    } else {
        this.curwords = [...this.mainWindow.main];
        checkedtoggle.checked = false;
    }
}

export function addToSelectedWords(woord) {
    if (woord.findIn(this.mainWindow.selected)) {
        this.mainWindow.selected.splice(woord.findIndex(this.mainWindow.selected), 1);
    } else {
        this.mainWindow.selected.push(woord);
    }
}

const sceneMethods = {
    main() {
        this.curwords = [...this.mainWindow.main];
    },
    learn() {
        this.learnWindow.response.class = 'hiding';
        this.learnWindow.response.innerHTML = '';
        this.learnWindow.currentIndex = Math.floor(Math.random() * this.curwords.length);
        this.learnWindow.currentWord = this.curwords[this.learnWindow.currentIndex];
    },
    verbuiging() {
        console.log(this.verbuigingWindow.verbuigingen);
    }
};

export function loadScene(name) {

    sceneMethods[name].bind(this)();

    Object.keys(this.showing).forEach(key => this.showing[key] = false);
    this.showing[name] = true;
}

export function reset() {
    this.learnWindow.response.class = 'hiding';
    this.learnWindow.response.innerHTML = '';
    if (this.curwords.length == 0) {
        this.loadScene('main');
        return;
    }
    this.learnWindow.currentIndex = Math.floor(Math.random() * this.curwords.length);
    this.learnWindow.currentWord = this.curwords[this.learnWindow.currentIndex];
}

export function submitLearnForm() {
    const form = document.querySelector('form');

    const data = this.learnWindow.currentWord.parseFromForm(form);
    const correct = this.learnWindow.currentWord.check(data);
    this.learnWindow.response.class = correct ? 'correct' : 'wrong';
    if (correct) {
        this.curwords.splice(this.learnWindow.currentIndex, 1);
    }
    this.learnWindow.response.innerHTML = this.learnWindow.currentWord.display();

    setTimeout(this.reset, 2500, correct);
}