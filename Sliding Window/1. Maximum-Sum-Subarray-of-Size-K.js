// Given an array of positive integers, and a positive number k, find the maximum sum of any contiguous subarray of size k.

// Input  : arr[] = {100, 200, 300, 400},  k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4
// Output : 39

// Input  : arr[] = {2, 3}, k = 3
// Output : Invalid
// Explanation: There is no subarray of size 3 as size of whole array is 2.

function maxSum(arr, k) {
  let len = arr.length;
  if (len < k) return null;

  let res = 0;
  for (let i = 0; i < k; i++) {
    res += arr[i];
  }
  let cur_sum = 0;
  for (let i = k; i < len; i++) {
    cur_sum += arr[i] - arr[i - k];
    res = Math.max(res, cur_sum);
  }
  return res;
}
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
console.log(maxSum(arr, k));
// The time complexity of this function is O(n), where n is the length of the input array arr. This is because the function iterates over the array twice: once to calculate the initial sum of the first k elements, and once to iterate over the remaining n-k elements, updating the current sum and comparing it to the maximum sum found so far. Since the number of iterations is directly proportional to the size of the input array, the time complexity is linear.

// The space complexity of this function is O(1), as it only uses a constant amount of additional memory to store the variables res, cur_sum, len, and i. The input array is not being modified, so no additional space is required for that.
