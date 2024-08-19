// First non repeating character

function firstNonRepChar(str: string): string{
    let charCount = new Map<String, number>();
    //count occur of each char
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char
        }
    }
    return ""
}
const input12 = "swiss";
console.log(firstNonRepChar(input12))