
function subsetSumToK(arr: number[], k: number): number[][]{
    const result: number[][] = [];
    function backtrack(currentSubset: number[], index: number, curSum: number) {
        //base case
        if (index === arr.length) {
            if (curSum === k) {
                result.push([...currentSubset])
            }
        return
        }
        backtrack(currentSubset, index + 1, curSum)
        
        currentSubset.push(arr[index])
        backtrack(currentSubset, index + 1, curSum + arr[index])
        
        currentSubset.pop()

    }
    backtrack([],0,0)
    return result
}
const arr12 = [1, 2, 3, 4, 5];
const k11 = 5;
const subsets = subsetSumToK(arr12, k11);
console.log(subsets);