/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// Declare a function called 'insert' that takes in an array of intervals and a new interval.
var insert = function(intervals, newInterval) {
    // Initialize two empty arrays called 'left' and 'right'.
    // let [left, right] = [[], []];
    let left = [];
    let right = [];
    // Iterate through each interval in the given 'intervals' array.
    for (var cur of intervals) {
        // If the current interval ends before the new interval starts, add it to the 'left' array.
        if (cur[1] < newInterval[0]) {
           left.push(cur); 
        // If the current interval starts after the new interval ends, add it to the 'right' array.
        } else if (cur[0] > newInterval[1]) {
            right.push(cur);
        // Otherwise, update the start and end times of the new interval.
        } else {
            newInterval[0] = Math.min(newInterval[0], cur[0]);
            newInterval[1] = Math.max(newInterval[1], cur[1]);
        }
    }
    // Concatenate the 'left' array, the new interval, and the 'right' array and return the result.
    var res = left.concat([[newInterval[0], [newInterval[1]]]]).concat(right);
    return res;
};
// Time Complexity: O(N), because algorithm must iterate through the input array of intervals once.
// Space Complexity: O(N), because left and right arrays each store a copy of up to N/2 elements from the input array, and result array stores all N elements from the input array. 
