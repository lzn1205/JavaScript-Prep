/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
   // Sort the input array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize ans to the sum of the first three elements of the sorted array
    let ans = nums[0] + nums[1] + nums[2];

    // Iterate through the array, keeping two pointers j and k that point to the elements immediately after the current element and the last element of the array, respectively
    for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    // For each iteration, calculate the sum of the current element, the element pointed to by j, and the element pointed to by k
    while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];

        // If the sum is closer to the target than the current value of ans, update ans to the new sum
        if (Math.abs(sum - target) < Math.abs(ans - target)) {
            ans = sum;
        }
        // If the sum is less than the target, increment j
        if (sum < target) j++;
        // If the sum is greater than the target, decrement k
        else if (sum > target) k--;
        // If the sum is equal to the target, return the target immediately
        else if (sum === target) return target;
    }
    }
    // Return the final value of ans
    return ans;
};
// Time Complexity: O(n^2) : loop for inner and outer loop, and each going through n elements
// Sort take O(n log n) so overal Time Complexity: O(n^2 + n log n) = O(n^2)
// Space Complexity: from O(log n) to O(n).
