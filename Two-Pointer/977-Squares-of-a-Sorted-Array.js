/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    /*
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        let c = Math.pow(Math.abs(nums[i]), 2);
        output.push(c);
    }
    return output.sort((a, b) => a - b);
    */
    // Two pointer approach

    let output = [];
    let left = 0;
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >=0; i--) {
        let square;
        if (Math.abs(nums[right]) > Math.abs(nums[left])) {
            square = nums[right];
            right--;
        } else {
            square = nums[left];
            left++;
        }
        output[i] = square * square;
    }
    return output;

    // Time Complexity: O(N)
    // Space Complexity: O(N)

};
