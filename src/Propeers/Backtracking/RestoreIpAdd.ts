
function restoreIPAddress(str: string): string[]{
    const result: string[] = []

    if (str.length > 12) {
        return result; // Return empty list
    }

    function isValid(segment: string): boolean{
        const num = parseInt(segment)
        return num >= 0 && num <= 255 && (segment === '0' || segment[0] !== "0");
    }
    
    function backtrack(startIndex: number, path: string[], dots: number) {
        //basecase
        if (dots === 4) {
            if (startIndex === str.length) {
                result.push(path.join("."))
            }
            return
        }   

        for (let i = startIndex; i < startIndex + 3 && i < str.length; i++){
            const segment = str.slice(startIndex, i + 1)
            if (isValid(segment)) {
                path.push(segment)
                backtrack(i + 1, path, dots + 1)
                path.pop()
            }
        }
        
    }
    backtrack(0,[],0)
    return result
}
const input11 = "2552551113";
const result111 = restoreIPAddress(input11);
console.log(result111);