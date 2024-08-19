

function generateSubSequence(str:string):string[] {
    const subSequences: string[] = []

    function backTrack(currentStr: string[], index: number):void {
        if (index === str.length) {
            if (currentStr.length > 0) {
                subSequences.push(currentStr.join(""))
            }
            return
        }
        backTrack(currentStr, index + 1) //exclude

        currentStr.push(str[index]) //include
        backTrack(currentStr, index + 1)
        
        currentStr.pop() //backtrack remove last charactr
    }

    backTrack([],0)
    return subSequences
}
const result11 = generateSubSequence("abc");
console.log(result11);