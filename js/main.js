import loadWoorden from './loadWoorden.js';
import createVue from './createVue.js';

let app;

loadWoorden('aestus')
    .then(woorden => {
        app = createVue(woorden, [], true);
    });