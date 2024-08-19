function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    
    // Mapping of digits to corresponding letters
    const digitToLetters: { [key: string]: string } = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', 
        '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    
    const allCombinations: string[] = [];
    
    // Recursive function to generate combinations
    function backtrack(combination: string, nextDigits: string) {
        // Base case: no more digits to process
        if (nextDigits.length === 0) {
            allCombinations.push(combination);
        } else {
            // Get the first digit and corresponding letters
            const digit = nextDigits[0];
            const letters = digitToLetters[digit];
            
            // Recursive case: process each letter for the current digit
            for (const letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1));
            }
        }
    }
     // Start the recursion with an empty combination and all digits
    backtrack('', digits);
    
    return allCombinations;
}
    
   function letterCombinations1(digits: string): string[] {
    if (!digits) return [];
    
    // Mapping of digits to corresponding letters
    const digitToLetters: { [key: string]: string } = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', 
        '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    
    const allCombinations: string[] = [];
    
    // Recursive function to generate combinations
   function backtrack(combination: string[], nextDigits: string) {
    if (nextDigits.length === 0) {
        allCombinations.push(combination.join(''));
    } else {
        const digit = nextDigits[0];
        const letters = digitToLetters[digit];
        
        for (const letter of letters) {
            combination.push(letter); // Add the current letter
            backtrack(combination, nextDigits.slice(1));
            combination.pop(); // Undo the choice (backtracking)
        }
    }
}
    
    // Start the recursion with an empty combination and all digits
    backtrack([''], digits);
    
    return allCombinations;
}

// Example usage
const result = letterCombinations('23');
console.log(result); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
