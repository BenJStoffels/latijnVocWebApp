export default function createVue(main, selected) {
    return new Vue({
        el: '.mainApp',
        data: {
            main,
            showingMain: true,
            showingLearn: false,
            curwords: main,
            selected,
            currentWord: null,
            response: {
                class: 'hiding',
                innerHTML: ''
            }
        },
        methods: {
            addToSelectedWords(woord) {
                if (woord.findIn(this.selected)) {
                    this.selected.splice(selected.findIndex(elt => elt.nom == woord.nom), 1);
                } else {
                    this.selected.push(woord);
                }
            },
            changeCurrentWords() {
                const checkedtoggle = document.querySelector('label.switch').querySelector('input')
                if (checkedtoggle.checked && this.selected.length != 0) {
                    this.curwords = this.selected;
                } else {
                    this.curwords = this.main;
                    checkedtoggle.checked = false;
                }
            },
            loadLearnForm() {
                this.response.class = 'hiding';
                this.response.innerHTML = '';
                this.currentWord = this.curwords.splice(Math.floor(Math.random() * this.curwords.length), 1)[0];
                console.log(this.currentWord);
                this.showingMain = false;
                this.showingLearn = true;
            },
            submitLearnForm() {
                const form = document.querySelector('form');

                const data = this.currentWord.parseFromForm(form);
                console.log(data);
                const correct = this.currentWord.check(data);
                this.response.class = correct ? 'good' : 'wrong';
                this.response.innerHTML = this.currentWord.display();

                setTimeout(this.loadLearnForm, 2500);
            }
        }
    });
}