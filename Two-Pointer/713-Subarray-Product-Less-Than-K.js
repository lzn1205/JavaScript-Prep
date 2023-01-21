/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // Check if input array is empty or null. If so, return 0.
    if (nums.length === 0 && nums === null) return 0;

    // Check if k is less than or equal to 1. If so, return 0.
    if (k <= 1) return 0;

    // Initialize left pointer to 0, product to 1, and count to 0.
    let left = 0;
    let product = 1;
    let count = 0;

    // Iterate over elements in nums, starting at the beginning.
    for (let right = 0; right < nums.length; right++) {
        // Increase right pointer by 1 and update product.
        product *= nums[right];

        // While product is greater than or equal to k and left is less than or equal to right,
        while (product >= k && left <= right) {
            // Decrease size of current subarray by incrementing left and dividing product by nums[left].
            product /= nums[left];
            left++;
        }

    // Increment count by number of elements in current subarray.
        count += right - left + 1;
    }

    // Return count, which is the total number of subarrays whose product is less than k.
    return count;
};
// Time Complexity : O(N)
// Space Complexity : O(1)
