var findCurruptPair = function(arr) {
  let 
  if (arr.length === 0) return arr;
  
  let i = 0;
  while (i < arr.length) {
    if (arr[i] != arr[arr[i] - 1]) {
      let idx = arr[i] - 1;
      
      let x = arr[i];
      arr[i] = arr[idx];
      arr[idx] = x;
    } else {
      i++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
      return new 
    }
  }
};
