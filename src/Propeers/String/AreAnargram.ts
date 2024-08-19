

function areAnargram(str1: string, str2: string): number{
    if (str1.length !== str2.length) return 0;
    //countmap

    const charCount = new Map<string, number>();
    for (const char of str1) {
        charCount.set(char,(charCount.get(char)||0)+1)
    }

    // subtract charcount based on char in str2
    for (const char of str2) {
        const count = charCount.get(char)
        if (!count) {
            return 0
        }
        if (count === 1) {
            charCount.delete(char)
        } else {
            charCount.set(char,count-1)
        }
    }
    return charCount.size === 0 ? 1 : 0;
}
const str1 = "aabbcc";
const str2 = "ababc";
console.log(areAnargram(str1, str2));