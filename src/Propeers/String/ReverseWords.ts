// Reverse String Word Wise

function reverseWords(str: string): string{
    return str.trim().split(/\s+/).reverse().join(" ")
}

const inputString ="a good   example";
console.log(reverseWords(inputString)); 