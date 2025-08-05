var missingNumber = function(nums) {
    let arrLen = nums.length
    let expectedNumsSum = (arrLen * (arrLen+1))/2
    
    let currentSum = nums.reduce((acc,cur)=> acc+cur,0)
    return expectedNumsSum - currentSum
};