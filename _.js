
const _ = {
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

    }
};




// Do not write or modify code below this line.
module.exports = _;