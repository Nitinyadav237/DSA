//  Is SubSequence

function isSubsequence(str: string, sub: string): boolean{
    let strptr = 0;
    let subptr = 0;
    while (strptr < str.length && subptr < sub.length) {
        if (str[strptr] === sub[subptr]) {
            subptr++
        }
        strptr++
    }
    return subptr===sub.length
}
const str = "abcde";
const sub1 = "ace"; // Subsequence
const sub2 = "aec"; // Not a subsequence

console.log(isSubsequence(str, sub1)); // Output: true
console.log(isSubsequence(str, sub2)); // Output: false