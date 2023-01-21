/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // 4 pointer i, j, k, n
    nums.sort((a, b) => a - b);
    let output = [];
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let k = j + 1; 
            let n = nums.length - 1;
            while (k < n) {
                let sum = nums[i] + nums[j] + nums[k] + nums[n];
                if (sum === target) {
                    output.push([nums[i], nums[j], nums[k], nums[n]]);
                    while (nums[k] === nums[k + 1]) k++;
                    while (nums[n] === nums[n - 1]) n--;
                    k++;
                    n--;
                } else if (sum < target) k++;
                else n--;
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }
    return output;
};
