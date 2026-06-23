const sumAll = function(min,max) {
    // what I did
    //let total = 0;
    //let array = [min];
    //let difference = max - min;
    //for(let i = 0; i < difference; i++) {
        //array.push(min+i);
    //}
    //array.reduce((total,value) => total += value)
    //return total;

    // solution
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
