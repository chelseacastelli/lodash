
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

};


// Do not write or modify code below this line.
module.exports = _;