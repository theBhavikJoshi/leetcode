/*

1480. Running Sum of 1d Array
Easy

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */


// Solution 1
// Bruteforce Solution
// Time Complexity - O(N)

const runningSum = (nums) => {
  const nums = [nums[0]];
  for (let i = 1;  i < nums.length; i++ ) {
      result[i] = result[i - 1] + nums[i];
  }
  return result;
}

// Solution 2
// ES6 Array Reduce
// Time Complexity - O(N)

const runningSum = (nums) => {
  nums.reduce((acc, curr, i, arr) => (arr[i] += acc));
  return nums;
};

// Solution 3
// In place Solution

const runningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums
}
