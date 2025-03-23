/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curSum = 0;
    let maxSum = nums[0];

    for (let i of nums) {
        if (curSum < 0) curSum = 0;
        curSum += i;
        maxSum = Math.max(maxSum, curSum);
    }

    return maxSum;
};