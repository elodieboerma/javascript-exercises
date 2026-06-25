const factorial = function(int) {
    if (int === 0) {
        return 1;
    } else if (int < 0 || !Number.isInteger(int)) {
        return undefined;
    }
    return int * factorial(int - 1);
};

// Do not edit below this line
module.exports = factorial;