/*

66. Plus One
Easy

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Example 3:
Input: digits = [0]
Output: [1]

*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */


// Solution 1
// Bruteforce Solution
// Time Complexity - O(N)

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) {
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

// Solution 2
// Using JS BigInt
// Time Complexity - O(N)

const plusOne = (digits) => {
  let number = BigInt(digits.join(''));
  number++;
  return number.toString().split('');
};
