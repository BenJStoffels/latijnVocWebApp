import Subs from "./woordTypes/Subs.js";
import Woord from "./woordTypes/Woord.js";

function loadJSON(url) {
    return fetch(url)
        .then(data => data.json());
}

function filterFromTo(list, from, to) {
    let passed = false;
    let before = true;
    return list.filter((woord, i) => {
        if (passed && before) {
            if (i == to) {
                before = false;
            }
            return true
        } else {
            if (i == from) {
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
        .then(woorden => filterFromTo(woorden, from || 0, to || woorden.length))
        .then(woorden => mapToType(woorden));
}