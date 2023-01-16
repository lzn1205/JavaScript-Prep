/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /*
    // aproach 1: popping//removing unwanted duplicates
    let count = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            count++;
            if (count > 2) {
                // splice() method is used for removing one one element in position i-th
                nums.splice(i, 1);
                // decrement size by 1
                i = i - 1;
            }
        }
        else count = 1;
    }
    return nums.length;
    */
    /*
    Time Complexity = O(N) + O(N^2) = O(N^2)
    Space Complexity = O(1) 
    */
    // Approach 2: Overwritting unwanted duplicates
    // Initialize the counter and the second pointer.
    let j = 1;
    let count = 1;
    // Start from the second element of the array and process elements one by one.
    for (let i = 1; i < nums.length; i++) {
        // If the current element is a duplicate, increment the count.
        if (nums[i] === nums[i-1]) count++;
        // Reset the count since we encountered a different element than the previous one
        else count = 1;
        // For a count <= 2, we copy the element over thus overwriting the element at index "j" in the array
        if (count <= 2) {nums[j] = nums[i]; j++;}
    }
    return j;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};
