import loadWoorden from './loadWoorden.js';
import loadVerbuigingen from './loadVerbuigingen.js';
import createVue from './createVue.js';

let app;
Promise.all([
        loadWoorden('adversus', 'princeps'),
        loadVerbuigingen('latijnVerb')
    ])
    .then(([woorden, verbuigingen]) => {
        console.log(verbuigingen);
        app = createVue(woorden, [], verbuigingen, verbuigingen[0]);
    });

function loadOtherWords(from, to) {
    loadWoorden(from, to)
        .then(woorden => {
            app.mainWindow.main = woorden;
            app.curwords = [...app.mainWindow.main];
        });
}

window.loadOtherWords = loadOtherWords;