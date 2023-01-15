/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const dif = target - nums[i];
        if (dif in map) { return [map[dif], i];}

        map[nums[i]] = i;
    }
    return null;
};
