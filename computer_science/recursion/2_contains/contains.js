const contains = function(object,value) {
    const values = Object.values(object);

    if (values.includes(value)) return true;

    const nestedObjects = values.filter(value => typeof value === 'object' && value !== null);

    return nestedObjects.some(nestedObject => contains(nestedObject, value));
};
  
// Do not edit below this line
module.exports = contains;
