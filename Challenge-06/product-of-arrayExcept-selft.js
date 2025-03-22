/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
approach : prefix , sufix 
step1 : calculate all prefix in one loop and create an array of prefix
step 2 : in second loop modify prefix[i] *= suffix
       : make sufix *= original[i]
 */
       var productExceptSelf = function(nums) {
        let answer = []
        let len = nums.length
        let productofPrifix = 1
        let productofSufix = 1
        for(let i = 0 ; i < len ; i++){
            answer[i] = productofPrifix
            productofPrifix *= nums[i]
        }
    
        for(let j = len-1 ; j >= 0 ; j--){
            answer[j] *= productofSufix
            productofSufix *= nums[j]
        }
        
    return answer
    
    
        
    };