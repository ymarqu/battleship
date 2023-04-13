const ship = (length) => {
    let hits = 0;

    let getLength = () => length
    let hit = () => {
        hits += 1;
        return hits;
    }
    let isSunk = () => {
        return hits === length
    }
    let getHits = () => hits;

    return {
        getLength,
        hit,
        isSunk,
        getHits
    };

};

export default ship;
