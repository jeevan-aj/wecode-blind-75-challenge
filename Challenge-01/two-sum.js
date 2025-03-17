/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 /**
 Approach : hashmap
 
  */
 var twoSum = function(nums, target) {
    const prevMap = new Map()


    for(let i= 0 ; i < nums.length ; i++){
        let answer = target - nums[i]
        if(prevMap.has(answer)){
            return [prevMap.get(answer),i]
        }else{
            prevMap.set(nums[i],i)
        }
    }
    
};