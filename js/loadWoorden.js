import Subs from "./woordTypes/Subs.js";
import Woord from "./woordTypes/Woord.js";
import Adj from "./woordTypes/Adj.js";

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
        } else if (woord.type == 'adj') {
            return new Adj(woord);
        }
        return new Woord(woord);
    });
}

function getIndexes(list, nom1, nom2) {
    const index1 = list.findIndex(woord => woord.isEqual(nom1)) < 0 ? 0 : list.findIndex(woord => woord.isEqual(nom1));
    const index2 = list.findIndex(woord => woord.isEqual(nom2)) < 0 ? list.length : list.findIndex(woord => woord.isEqual(nom2));

    return [list, index1, index2];
}

export default function loadWoorden(from, to) {
    return loadJSON('./woorden/woordjesLatijn.json')
        .then(woorden => mapToType(woorden))
        .then(woorden => filterFromTo(...getIndexes(woorden, from, to)));
}