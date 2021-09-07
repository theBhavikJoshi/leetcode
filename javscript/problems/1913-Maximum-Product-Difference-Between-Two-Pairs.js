/*

1913. Maximum Product Difference Between Two Pairs
Easy

The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.

 

Example 1:

Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
Example 2:

Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
 

Constraints:

4 <= nums.length <= 104
1 <= nums[i] <= 104

*/

/**
 * @param {number[]} nums
 * @return {number}
 */


// Solution 1
// Sorting Solution
// Time Complexity - O(nlogn)
// Space Complexity - O(n)

const maxProductDifference = (nums) => {
  nums.sort((a, b) => b - a);
  return (nums[0] * nums[1]) - (nums[nums.length - 1] * nums[nums.length - 2]);
};

// Solution 2
// Bruteforce Solution
// Time Complexity - O(n)
// Space Complexity - O(n)

const maxProductDifference = (nums) => {
  let max1 = max2 = -Infinity;
  let min1 = min2 = Infinity;

  nums.forEach(num => {
    
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  });
  return max1 * max2 - min1 * min2;

};

// Solution 3
// Bruteforce (Math.max and Math.min) Solution
// Time Complexity - O(n)
// Space Complexity - O(n)

const maxProductDifference = (nums) => {
  
  let firstMax = Math.max(...nums);
  let firstMaxIndex = nums.indexOf(firstMax);
  nums.splice(firstMaxIndex, 1);
  
  let secondMax = Math.max(...nums);
  let secondMaxIndex = nums.indexOf(secondMax);
  nums.splice(secondMaxIndex, 1);
  
  let firstMin = Math.min(...nums);
  let firstMinIndex = nums.indexOf(firstMin);
  nums.splice(firstMinIndex, 1);
  
  let secondMin = Math.min(...nums);
  let secondMinIndex = nums.indexOf(secondMin);
  nums.splice(secondMinIndex, 1);

  return (firstMax * secondMax) - (firstMin * secondMin);

};
