// Longest Subarray Zero Sum
//to find longest sum 1.create prefixsum if it is equla to 0 ->update maxlength+1 2.if curr!=0 check map if it doesnot have add it sum along with index 2.1 if it has check if the num exist if it has cal length and update maxlength
function longestSubArrayZero(arr: number[]): number{
    let currentSum = 0
    let maxLength=0
    const sumIndexMap=new Map<number,number>()
    
    for (let i = 0; i < arr.length; i++){
        currentSum += arr[i]
        console.log(currentSum)

        if (currentSum === 0) {
            maxLength=i+1
        }
        if (sumIndexMap.has(currentSum)) {
            const length = i - sumIndexMap.get(currentSum)!
            maxLength=Math.max(maxLength,length);
        } else {
            sumIndexMap.set(currentSum,i)
        }
    }
    return maxLength
}
console.log(longestSubArrayZero([1, -1, 3, -2, 2, -1]));