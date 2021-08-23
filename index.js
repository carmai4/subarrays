const minimist = require('minimist');
const util = require('./utils/subarray-util');

const input = minimist(process.argv.slice(2))._;
console.log('input?', input);
util.printSubArrays(input);
