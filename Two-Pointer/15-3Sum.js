/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Initialize an empty array to store the result
    let res = [];

    // Set the target sum to 0
    let target = 0;

    // If the array has less than 3 elements, return an empty array
    if (nums.length < 3) return []; 

    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Loop through the array with 3 pointers: i, j, and k
    // Because i is the smallest index, it starts at the beginning of the array
    for (let i = 0; i < nums.length - 2; i++) {
        // If the value at index i is positive, we can stop looping
        // because all further values will also be positive and can't sum to 0
        if (nums[i] > 0) break;
        
        // If the value at index i is the same as the value at index i - 1, skip it
        // This avoids adding duplicate arrays to the result
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Set j to be i + 1 and k to be the last element in the array
        let j = i + 1;
        let k = nums.length - 1;

        // While j is less than k, do the following:
        while (j < k) {
            // Calculate the sum of the values at indices i, j, and k
            let sum = nums[i] + nums[j] + nums[k];
            // If the sum is 0, add the 3 numbers to the result array and move j and k inward
            if (sum === target) {
                res.push([nums[i], nums[j], nums[k]])
                // Avoid duplicates by skipping over any consecutive elements that are the same as nums[j] or nums[k]
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                // Move j and k inward
                j++;
                k--;
            }
            // If the sum is less than 0, move j inward
            else if (sum < target) j++;
            // If the sum is greater than 0, move k inward
            else k--;
        }
    }

    // Return the result array
    return res;
}
