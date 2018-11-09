function loadJSON(url) {
    return fetch(url)
        .then(data => data.json());
}

export default function loadVerbuigingen(name) {
    return loadJSON(`./verbuigingen/${name}.json`)
}