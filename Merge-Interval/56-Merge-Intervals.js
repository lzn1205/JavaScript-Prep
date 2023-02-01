/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Sort the intervals by their start time, breaking ties by end time
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

    // Initialize the result array with the first interval in the sorted array\
    // in this step, we can use the intervals.shift() as well.
    var prev  = intervals[0];
    var res = [prev];

    // Iterate through the rest of the intervals
    for (var cur of intervals) {
        // If the current interval's start time is less than or equal to the previous interval's end time,
        // then they overlap and should be merged
        if (cur[0] <= prev[1]) {
            // Update the previous interval's end time to be the maximum of the current interval's end time
            // and the previous interval's end time
            prev[1] = Math.max(prev[1], cur[1]);
        } 
        // If the current interval does not overlap with the previous interval, add it to the result array
        else {
            res.push(cur);
            // Update the previous interval to be the current interval
            prev = cur;
        }
    }

    // Return the result array
return res;
};

// Time Complexity: O(n logn), because i used the sort() method, which take O(n logn), and i do the linear scan for the list, so overall that take O(n logn) time 
// Space Complexity: O(N),  as a new result array is created and the size of this array is directly proportional to the number of intervals. The size of the input array is not relevant to the space complexity, as the input array is not being modified.
