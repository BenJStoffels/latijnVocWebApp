import loadWoorden from './loadWoorden.js';
import loadVerbuigingen from './loadVerbuigingen.js';
import createVue from './createVue.js';

let scrollable, items, itemCount, offset;

let app;
Promise.all([
        loadWoorden('adversus', 'princeps'),
        loadVerbuigingen('latijnVerb')
    ])
    .then(([woorden, verbuigingen]) => {
        app = createVue(woorden, [], verbuigingen, verbuigingen[0]);
    });

function loadOtherWords(from, to) {
    loadWoorden(from, to)
        .then(woorden => {
            app.mainWindow.main = woorden;
            app.curwords = [...app.mainWindow.main];
        });
}

function rotate(elt) {
    if (elt.className == "list-item rotate") {
        elt.className = "list-item";
    } else {
        elt.className = "list-item rotate";
    }
}

window.rotateElt = rotate;
window.loadOtherWords = loadOtherWords;