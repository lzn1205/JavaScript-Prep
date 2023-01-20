/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumSmaller(nums, target) {
    // Sort the input array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize a count of triplets that meet the condition
    let count = 0;

    // Iterate through each element in the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Initialize the other two pointers to the elements immediately following and preceding i
        let j = i + 1;
        let k = nums.length - 1;

        // Perform a two-pointer search to find valid triplets
        while (j < k) {
            // If the sum of the elements at i, j, and k is less than the target,
            // increment the count by the number of elements between j and k (inclusive)
            // and increment j (since a larger j will still result in a valid triplet)
            if (nums[i] + nums[j] + nums[k] < target) {
                count += k - j;
                j++;
            // If the sum is not less than the target, decrement k (since a smaller k will still result in a valid triplet)
            } else {
                k--;
            }
        }
    }
    return count;
};
// Time Complexity: O(N^2)
// Space Complexity: O(1)
