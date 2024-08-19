

function groupAnagram(strs: string[]): string{
    const map = new Map<string, string[]>()

    for (const word of strs) {
        //generate charcount
        const charCount = Array(26).fill(0)
        for (const char of word) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++ //a setting [1-000] rest zero
        }

        //charcount to word
        const key = charCount.join("#");
        if (!map.has(key)) {
            map.set(key,[])
        }
        map.get(key)!.push(word)
    }
    const result = Array.from(map.values()).map(group => group.sort().join(' ')).join(" ");
        
    
    return result;
}
const inputStr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(inputStr))