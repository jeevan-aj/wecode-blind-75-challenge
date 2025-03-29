/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate the area with the current left and right pointers
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const area = minHeight * width;

        // Update the maximum area
        maxWater = Math.max(maxWater, area);

        // Move the pointer pointing to the smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};