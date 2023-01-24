/*
For this problem, your goal is to sort an array of 0, 1 and 2's but you must do this in place, 
in linear time and without any extra space (such as creating an extra array). 
This is called the Dutch national flag sorting problem. 

For example, if the input array is [2,0,0,1,2,1] then your program should output [0,0,1,1,2,2] 
and the algorithm should run in O(n) time.
*/

/*
(1) Create a low pointer at the beginning of the array and a high pointer at the end of the array.
(2) Create a mid pointer that starts at the beginning of the array and iterates through each element.
(3) If the element at arr[mid] is a 2, then swap arr[mid] and arr[high] and decrease the high pointer by 1.
(4) If the element at arr[mid] is a 0, then swap arr[mid] and arr[low] and increase the low and mid pointers by 1.
(5) If the element at arr[mid] is a 1, don't swap anything and just increase the mid pointer by 1.
This algorithm stops once the mid pointer pass the high pointer
*/

/* Example:
2 0 0 1 2 1
1 0 0 1 2 2
1 0 0 1 2 2
0 1 0 1 2 2 
0 0 1 1 2 2
 */

function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
  
function dutchNatFlag(arr) {
    
  var low = 0;
  var mid = 0;
  var len = arr.length - 1;
    
  // one pass through the array swapping
  // the necessary elements in place
  while (mid <= len) {
    if (arr[mid] === 0) swap(arr, low++, mid++); 
    else if (arr[mid] === 2) swap(arr, mid, high--);
    else if (arr[mid] === 1) mid++;
  }
    return arr;
}

// Require: 
// Time Complexity: O(N)
// Space Complexity: O(1)
