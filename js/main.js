import Subs from './woordTypes/Subs.js';
import Woord from './woordTypes/Woord.js';

function loadWoorden(num) {
    return fetch(`./woorden/woordjesLatijn${num}.json`)
        .then(data => data.json());
}


const app = loadWoorden(3)
    .then(woorden => {
        woorden = woorden.map(woord => {
            if (woord.type == 'subs') {
                return new Subs(woord);
            }
            return new Woord(woord);
        });
        return new Vue({
            el: '.container',
            data: {
                woorden
            }
        });
    });