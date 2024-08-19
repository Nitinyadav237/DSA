function firstMissingPositive(nums: number[]): number {
    const n = nums.length
    //place each number
    for (let i = 0; i < n; i++) {
        //swap only[1,n] and check number index [1, 4, -1, 1, 2]
        // nums[1]!==nums[4-1=>3]=>1!==3
        while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            const correctIndex = nums[i] - 1;
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }
    //  Find the first missing positive integer 
    for (let i = 0; i < n; i++){
        if (nums[i] !== i + 1) {
            return i+1
        }
    }
    return n+1
}

const nums = [3, 1, 4, 2];
console.log(firstMissingPositive(nums));