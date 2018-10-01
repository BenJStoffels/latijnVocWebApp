export default function createVue(main, selected, showing) {
    return new Vue({
        el: '.woordenContainer',
        data: {
            main,
            showing,
            curwords: main,
            selected
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
            }
        }
    });
}