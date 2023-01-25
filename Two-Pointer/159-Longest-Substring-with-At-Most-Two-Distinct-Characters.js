/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    // Initialize the length of the longest substring to 0
    let length = 0;

    // If the input string is less than 3 characters long, return its length
    if (s.length < 3) {
        return s.length;
    }

    // Initialize left and right pointers to the start of the string
    let left = 0, right = 0;
    // Initialize the first distinct character to the first character of the string
    let firstChar = 0;
    // Initialize the second distinct character to -1 (no second character yet)
    let secondChar = -1;
    // While the right pointer is within the string
    while (right < s.length) {
        // If the current character is the same as the left pointer character
        // and is not the same as the previous character
        if (s[right] === s[left] && s[right] !== s[right - 1]) {
            // Update the first distinct character to the current character
            firstChar = right;
        }  
        // If the current character is different from the left pointer character
        if (s[right] !== s[left]) {
            // If there is no second distinct character yet
            if (secondChar < 0) {
                // Update the second distinct character to the current character
                secondChar = right;
            }
            else {
                // If the current character is the same as the second distinct character and is not the same as the previous character
                if (s[right] === s[secondChar] && s[right] !== s[right - 1]) {
                    // Update the second distinct character to the current character
                    secondChar = right;
                }
                if (s[right] !== s[secondChar]) {
                    // If the current substring is longer than the current longest substring
                    if (right - left > length) {
                        // Update the length of the longest substring
                        length = right - left;
                    }
                    // Move the left pointer to the right of the last occurrence of the first or second distinct character
                    left = Math.max(firstChar, secondChar)
                    // Update the first distinct character to the new left pointer
                    firstChar = left;
                    // Update the second distinct character to the current character
                    secondChar = right;
                }
            }
        }
        // Move the right pointer to the next character
        right++;
    }
    // Return the maximum of the final substring length and the current longest substring length
    return Math.max(length, right - left);
};
        
