
const _ = {
    // Number Methods
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        return Math.min(lowerClampedValue, upper);
    },
    inRange(number, start, end) {
        if (!end) {
            end = start;
            start = 0;
        } else if (start > end) {
            const temp = start;
            start = end;
            end = temp;
        }

        return number < start || number >= end ? false : true;
    },

    // String Methods
    words(string) {
        return string.split(' ');
    },
    pad(string, length) {

        if (string.length > length) return string;

        const paddingLeft = Math.floor(Math.abs(string.length - length) / 2);
        const paddingRight = (paddingLeft + string.length) - paddingLeft;

        return ' '.repeat(paddingLeft) + string + ' '.repeat(paddingRight);
    },

    // Object Methods
    has(object, key) {
        return object[key] ? true : false;
    },
    invert(object) {
        let inverted = {};
        for (const item in object) {
            inverted[object[item]] = item;
        }
        return inverted;
    },
    findKey(object, predicate) {

        for (const item in object) {
            if (predicate(object[item])) return item;
        }
        return undefined;
    },

    // Array Methods
    drop(array, n=1) {
        let temp = array;
        return temp.slice(n);
    },
    dropWhile(array, predicate) {
        let dropNumber = array.findIndex(function(element, index) {
            return !predicate(element, index, array);
        });
        return this.drop(array, dropNumber);
    },
    chunk(array, size=1) {
        if (size < 1) { return array; }
        
        let chunkArray = [];
        let start = 0;
        for(let i = 0; i < array.length; i += size) {
            chunkArray.push(array.slice(start, start += size));
        }

        return chunkArray;
    }
};


// Do not write or modify code below this line.
module.exports = _;