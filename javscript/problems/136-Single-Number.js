/*

136. Single Number
Easy

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

*/

/**
 * @param {number[]} nums
 * @return {number}
 */


// Solution 1
// Hashmap Solution
// Time Complexity - O(N)
// Space Complexity - O(N)

const singleNumber = (nums) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      delete hash[nums[i]];
    } else {
      hash[nums[i]] = 1;
    }
  }
  return Object.keys(hash)[0];
};

// Solution 2
// Using Bitwise XOR Operator
// Time Complexity - O(N)
// Space Complexity - O(1)

const singleNumber = (nums) => {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

// Solution 3
// Using Bitwise XOR Operator and Array Reduce
// Time Complexity - O(N)
// Space Complexity - O(1)

const singleNumber = (nums) => {
  return nums.reduce((acc, num) => acc ^ num, 0);
};

// OR 

const singleNumber = (nums) => nums.reduce((acc, num) => acc ^ num, 0);
