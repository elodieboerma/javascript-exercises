const fibonacci = function(n) {
    n = Number(n);

    if (n < 0) {return "OOPS"};
    if (n === 0) {return 0};
    if (n === 1) {return 1};
    
    let num1 = 1;
    let num2 = 1;
    for (let i = 3; i <= n; i++) {
            let sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
    return num2;

};

// Do not edit below this line
module.exports = fibonacci;
