const permutations = function(array,index=0,results=[]) {
    if (index == array.length) {
    // the [...array] syntax is a way to clone the contents of the array.
    // because we do not want to pass a reference to the array, as that would mean
    // that each item in `results` will be the same item
    results.push([...array]);
    return results;
  }

  for (let i = index; i < array.length; i++) {
    // We use "destructuring assignment" here to swap the values of array[index] and array[i]
    [array[index], array[i]] = [array[i], array[index]];
    permutations(array, index + 1, results);
    [array[index], array[i]] = [array[i], array[index]];
  }

  return results;
};
  
// Do not edit below this line
module.exports = permutations;
