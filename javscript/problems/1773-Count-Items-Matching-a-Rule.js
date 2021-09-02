/*

1773. Count Items Matching a Rule
Easy

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

Example 1:
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

Example 2:
Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.

*/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

// Solution 1
// Bruteforce Solution
// Time Complexity - O(n)
// Space Complexity - O(1)

const countMatches = (items, ruleKey, ruleValue) => {
  const keyTable = {
    'type': 0,
    'color': 1,
    'name': 2
  };
  let count = 0;
  const key = keyTable[ruleKey];
  items.forEach(item => {
    if (item[key] == ruleValue) {
      count++
    }
  });
  return count;
};

// Solution 2
// Using Reduce
// Time Complexity - O(n)
// Space Complexity - O(1)

const countMatches = (items, ruleKey, ruleValue) => {
  const keyTable = {
    type: 0,
    color: 1,
    name: 2,
  };
  const key = keyTable[ruleKey];
  return items.reduce((acc, current) => {
    if (current[key] == ruleValue) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
};
