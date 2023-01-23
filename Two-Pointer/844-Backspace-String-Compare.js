/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var edit = function(s) {
    let backspace = 0;
    let res = '';
    for (let i = s.length - 1; i >= 0; i--) {
        //skip the character behind #
        if (s[i] === '#') backspace++;
        else if (backspace > 0) backspace--;
        else res = s[i] + res;
    }
    return res;
}

var backspaceCompare = function(s, t) {
    return edit(s) === edit(t);
};
