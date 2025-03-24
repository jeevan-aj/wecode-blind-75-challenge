/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
    let curMin = 1
    let curMax = 1
    let result = nums[0]


    for(let i of nums){

        let temp = curMin* i
        curMin = Math.min(i,curMax*i,temp,)
        curMax = Math.max(i,curMax*i,temp)
        result = Math.max(result,curMax)
    }

    return result
};