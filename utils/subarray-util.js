function printSubArrays(arr) {
  const total = 1 << arr.length;
  console.log(`total ${total} subarrays`);
  for (let i = 0; i < total; i++) {
    console.log(arr.filter((n, j) => i & 1 << j))
  }
}

module.exports = {
  printSubArrays
};
