const repeatString = function(string,num) {
    if(num < 0) return "ERROR"; //haven't done this on my own yet - is in the solution
    let repeated;
    for(let i = 0; i < num; i++) {
        repeated += string;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
