/*

1. Two Sum
Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// Solution 1
// Bruteforce Solution
// Time complexity - O(n^2)

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j ++) {
      if (i != j && (nums[i] + nums[j] == target)) {
        return [i,j]
      }
    }
  }
};


// Solution 2
// Optimised Solution - Hash map solution
// Time Complexity - O(n)
// Adding numbers to a hashmap as we iterate against their indices. This will allow us to lookup the numbers in O(1) complexity.

const twoSum = (nums, target) => {
  let numsHash = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsHash[target - nums[i]] != null) {
      return [ numsHash[target - nums[i]], i ];
    }

    numsHash[nums[i]] = i
  }
}
