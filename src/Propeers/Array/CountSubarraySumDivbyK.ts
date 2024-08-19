// Count all sub-arrays having sum divisible by k
// ‘ARR’ = { 5, 0, 2, 3, 1} and ‘K = 5’.
// calc prefixsum find remainder and check in map it is pre 2.1->yes get(remainder)and add it to count else add it map
function subArrayCountDivbyk(arr: number[],k:number): number{
    let prefixSum = 0
    let count = 0
    const remainderCount=new Map<number,number>()//<remainder,count>
    //initialize map for 0 remainder and count 1
    remainderCount.set(0, 1)
    for (const num of arr) {
        prefixSum += num
        let remainder = prefixSum % k
        //handel negative remainder
        if (remainder < 0) remainder += k;

        //count subarr div by k
        if (remainderCount.has(remainder)) {
            count += remainderCount.get(remainder)!
        }
        //adding and updating
        remainderCount.set(remainder,( remainderCount.get(remainder)||0)+1)
    }
    return count
}

const arr15 = [4, 5, 0, -2, -3, 1];
const k = 5;
console.log(subArrayCountDivbyk(arr15, k));