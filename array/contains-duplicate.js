// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

// Instructions
// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// My solution

const containsDuplicate = function(nums) {
  const unique = new Set([...nums]);

  return unique.size !== nums.length;
};
