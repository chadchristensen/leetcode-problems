// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

// Instructions
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// My solution

const singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];
    
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      if (nums[i - 1] !== nums [i] && nums[i] !== nums[i + 1]) {
          return nums[i]
      }
  }
}

// Another solution
const singleNumber = function(nums) {
  const numsDictionary = {}
    
  for (let i = 0; i < nums.length; i++) {
      if (numsDictionary[nums[i]]) {
          delete numsDictionary[nums[i]];
      } else {
          numsDictionary[nums[i]] = 1;
      }
  }
  
  return Object.keys(numsDictionary)[0]
}