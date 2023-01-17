/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // fast and slow method to detect the cycle of the array

    let fast = 0;
    let slow = 0;
    // detect the cycle for array
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (fast === slow) break;      
    } 
    let check = 0;
    while (true) {
        check = nums[check];
        fast = nums[fast];
        if (check === fast) break;
    }
    return check;
};
