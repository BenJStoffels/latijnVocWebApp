export default function createVue(main, selected, showing) {
    return new Vue({
        el: '.woordenContainer',
        data: {
            main,
            showing,
            curwoorden: main,
            selected
        },
        methods: {
            addToSelectedWords(woord) {
                if (woord.findIn(selected)) {
                    selected.splice(selected.findIndex(elt => elt.nom == woord.nom));
                    console.log(selected, woord);
                } else {
                    selected.push(woord);
                    console.log(selected, woord);
                }
            }
        }
    });
}