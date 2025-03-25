/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
 Approach : Binary search since solution needs to be in o(log n)

 step 1 : loop till left < right
 step 2 : mid = fllor((left+right)/2)
 step 2 : if(mid > right) it means smaller value is in right so we mode left to mid + 1 
        : else right = mid and find its mid and continue
        : when the left > right loop exits and last nums[left] will be the smallest
 
  */

        
// condition the solution should be of o(log n) time complexity
        var findMin = function(nums) {
            let left = 0
            let right = nums.length-1
            while(left < right){
             let mid = Math.floor((left+right)/2)
         
             if(nums[mid] > nums[right]){
                 left = mid+1
             }else{
                 right = mid
             }
            }
         
            return nums[left]
         
         };