import Subs from "./woordTypes/Subs.js";
import Woord from "./woordTypes/Woord.js";

function loadJSON(url) {
    return fetch(url)
        .then(data => data.json());
}

function filterFromTo(list, from, to) {
    let passed = false;
    let before = true;
    return list.filter(woord => {
        if (passed && before) {
            if (woord.nom == to) {
                before = false;
            }
            return true
        } else {
            if (woord.nom == from) {
                passed = true;
                return true;
            }
            return false;
        }
    });
}

function mapToType(list) {
    return list.map(woord => {
        if (woord.type == 'subs') {
            return new Subs(woord);
        }
        return new Woord(woord);
    });
}

export default function loadWoorden(from, to) {
    return loadJSON('./woorden/woordjesLatijn.json')
        .then(woorden => filterFromTo(woorden, from, to))
        .then(woorden => mapToType(woorden));
}