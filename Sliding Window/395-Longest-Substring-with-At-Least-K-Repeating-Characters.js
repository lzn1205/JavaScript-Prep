/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    // Convert the input string into an array of characters
    let str = s.split('');
    // Initialize an array to keep track of the frequency of each character
    let counts = new Array(26).fill(0);
    // Variables to control the number of unique characters in the current substring
    let idx, max = 0, unique, noLessThanK;
    
    // Repeat the process for i = 1 to 26, to handle all possible combinations of unique characters
    for (let i = 1; i <= 26; i++) {
        // Reset the frequency array for each iteration
        counts.fill(0);
        // Initialize the two pointers to the beginning of the string
        let left = 0; 
        let right = 0;
        // Initialize variables to keep track of unique characters and characters with frequency >= k
        unique = 0;
        noLessThanK = 0;
        // Move the j pointer to the right until the number of unique characters in the current substring is less than or equal to h
        while (right < str.length) {
            if (unique <= i) {
                // Calculate the index of the current character in the frequency array
                // 'a'.charCodeAt(0) = 97 following the UTF-16, this line is for make sure that that first letter a starts from 0;
                idx = str[right].charCodeAt(0) - 'a'.charCodeAt(0);
                // If the frequency of the current character is 0, increase the count of unique characters
                if (counts[idx] === 0) unique++;
                counts[idx]++;
                // If the frequency of the current character is k, increase the count of characters with frequency >= k
                if (counts[idx] === k) noLessThanK++;
                right++;
            } else {
                // If the number of unique characters is greater than h, move the i pointer to the right
                idx = str[left].charCodeAt(0) - 'a'.charCodeAt(0);
                if (counts[idx] === k)
                    noLessThanK--;
                counts[idx]--;
                if (counts[idx] === 0)
                    unique--;
                left++;
            }
            // If the number of unique characters is equal to h and the number of characters with frequency >= k is equal to h, update the max length if necessary
            if (unique === i && unique === noLessThanK)
                max = Math.max(right - left, max);
        }
    }
    
    // Return the maximum length of the substring found in all iterations
    return max;
};
