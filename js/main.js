import loadWoorden from './loadWoorden.js';
import createVue from './createVue.js';

let app;

loadWoorden('aestus')
    .then(woorden => {
        app = createVue(woorden, [], true);
    });

function loadOtherWords(from, to) {
    loadWoorden(from, to)
        .then(woorden => {
            app.mainWindow.main = woorden;
            app.curwords = [...app.mainWindow.main];
        });
}

window.loadOtherWords = loadOtherWords;