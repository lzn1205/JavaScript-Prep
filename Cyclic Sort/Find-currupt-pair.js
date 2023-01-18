function printTwoElements(arr) {
  var i;
    document.write("The repeating element is: ");
  for (i = 0; i < arr.length; i++) {
    let num = Math.abs(arr[i]);
    if (arr[num - 1] > 0) arr[num - 1] = arr[num - 1] * -1;
    else document.write(num);
  }
  
  document.write("<br> and the missing element is ");
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) document.write(i + 1);
  }
}
// Running
arr = new Array(7, 3, 4, 5, 5, 6, 2);
printTwoElements(arr);
// Output: 
// The repeating element: 5
// and the missing element: 1

// Time Complexity: O(n)
// Space Complexity: O(1) as it is using constant variables.
