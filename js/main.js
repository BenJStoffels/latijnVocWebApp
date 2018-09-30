import loadWoorden from './loadWoorden.js';


const app = loadWoorden('donum', 'imperium')
    .then(woorden => {
        return new Vue({
            el: '.container',
            data: {
                woorden
            }
        });
    });