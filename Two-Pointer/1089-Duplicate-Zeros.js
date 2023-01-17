function duplicateZeros(arr) {
    // possibleDups will store the number of zeros that will be duplicated in the array
    let possibleDups = 0;
    // length_ is the last index of the original array that will be part of the modified array
    let length_ = arr.length - 1;

    // Find the number of zeros to be duplicated
    // Stopping when left points beyond the last element in the original array
    // which would be part of the modified array
    for (let left = 0; left <= length_ - possibleDups; left++) {

        // Count the zeros
        if (arr[left] === 0) {

            // Edge case: This zero can't be duplicated. We have no more space,
            // as left is pointing to the last element which could be included  
            if (left === length_ - possibleDups) {
                // For this zero we just copy it without duplication.
                arr[length_] = 0;
                length_ -= 1;
                break;
            }
            possibleDups++;
        }
    }

    // Start backwards from the last element which would be part of new array.
    let last = length_ - possibleDups;

    // Copy zero twice, and non zero once.
    for (let i = last; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;
        } else {
            arr[i + possibleDups] = arr[i];
        }
    }
};

// Time Complexity = O(N)
// Space Complexity = O(1)
