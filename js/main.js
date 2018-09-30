import loadWoorden from './loadWoorden.js';

let app;

loadWoorden()
    .then(woorden => {
        app = new Vue({
            el: '.container',
            data: {
                woorden
            }
        });
        window.app = app;
    });