/*

11. Container With Most Water
Medium

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/

/**
 * @param {number[]} height
 * @return {number}
 */


// Solution 1
// Bruteforce Solution
// Time complexity - O(n^2)

const maxArea = height => {
  let maxWaterArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let waterArea = (j - 1) * Math.min(height[i], height[j]);
      maxWaterArea = Math.max(maxWaterArea, waterArea);
    }
  }
  return maxWaterArea;
};


// Solution 2
// Optimised Solution - Two pointers solution
// Time Complexity - O(n)

const maxArea = (height) => {
  let maxWaterArea = 0;
  let left = 0, right = height.length - 1;

  while (left < right) {
    let waterArea = (right - left) * Math.min(height[left], height[right]);
    maxWaterArea = Math.max(maxWaterArea, waterArea);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return maxWaterArea;
};
