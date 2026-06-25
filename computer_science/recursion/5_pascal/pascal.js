const pascal = function(n) {
    let currentRow = [1];

    if (n === 1) { return currentRow };

    const prevRow = pascal(n - 1);

    prevRow.forEach((number, i) => {
        const rightNeighbor = prevRow[i + 1] ?? 0;
        currentRow.push(number + rightNeighbor);
    })

  return currentRow;
};
  
// Do not edit below this line
module.exports = pascal;
