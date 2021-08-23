"use strict";
const util = require('./subarray-util');

test('prints all subarrays', () => {
  const arr1 = [1, 2];
  const spy = jest.spyOn(console, 'log');
  util.printSubArrays(arr1);
  expect(spy).toHaveBeenNthCalledWith(1, 'total 4 subarrays');
  expect(spy).toHaveBeenCalledWith([]);
  expect(spy).toHaveBeenCalledWith([1]);
  expect(spy).toHaveBeenCalledWith([2]);
  expect(spy).toHaveBeenCalledWith([1,2]);
})
