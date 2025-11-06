const leapYears = function(year) {
    // I think I did it right, but the solution created constants to improve readbility.
    if(year % 4 === 0 && !(year % 100 === 0)) {
        return true;
    }else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
