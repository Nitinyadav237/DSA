// Minimum Parenthesis need to be add to make it valid

function minimumParenthesis(pattern: string): number{
    let OpenNeeded = 0
    let closeNeeded = 0
    
    for (const char of pattern) {
        if (char === "(") {
            OpenNeeded++
        } else if (char === ")") {
            if (OpenNeeded > 0) {
                OpenNeeded--
            } else {
                closeNeeded++
            }
        }
    }
    return OpenNeeded+closeNeeded
}
const pattern = "(()(";
console.log(minimumParenthesis(pattern))