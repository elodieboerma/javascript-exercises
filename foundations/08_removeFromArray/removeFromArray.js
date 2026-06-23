const removeFromArray = function(array,...otherArgs) {
    // this was what I came up with and I think it would work, but I couldn't figure out how to test
    // that it works bc this is a js file and not an html one
    //outer: for(const item of array) {
        //for(const arg of otherArgs) {
            //if(arg === item) {
                //array.splice(item,item+1);
                //break outer;
            //}
        //}
    //};

    const newArray = [];
    array.forEach((item) => {
        if (!otherArgs.includes(item)) {
        newArray.push(item);
        }
    });

    return array;
}
console.log(removeFromArray([532,7,3,63,"hello",4],7,"hello"));

// Do not edit below this line
module.exports = removeFromArray;