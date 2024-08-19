// https://www.naukri.com/code360/problems/make-unique-array_920329?utm_source=youtube&utm_medium=affiliate&utm_campaign=parikh_youtube
// You are given an array ‘ARR’ of size ‘N,’ and you have to tell the minimum number of elements that need to be removed such that the array contains all distinct elements. More formally, there should not be any ‘I’ and ‘J’ such that ‘I’ != ‘J’ and ‘ARR’[‘I’] = ‘ARR’[‘J’].

// o(nlogn ) space->o(1)
// sort the array 2.count duplicates

// function findMinRemoval(arr:number[]=[1, 1, 1, 2, 2, 3, 4, 4, 4, 4]):number {
//     if (arr.length === 0) return 0;
//     arr.sort((a, b) => a - b);
//     let removal = 0;

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === arr[i + 1]) removal++;
//     }
//     return removal;
// }
// (o(n) same for time and space)
function findMinRemoval(arr:number[]=[1, 1, 1, 2, 2, 3, 4, 4, 4, 4]): number{
    if (arr.length === 0) return 0;
    let removal=0
    const countMap = new Map<number, number>;
    //count map has count of no of times num repeated
    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (const count of countMap.values()) {
        if (count > 1) {
            removal += count - 1
        }
    }

return removal
}
// (0(n)->becoz of set space  0(1))
function findMinRemoval2(arr: number[] = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4]): number {
    if (arr.length === 0) return 0;
    
    // Create a Set to store unique elements
    const uniqueElements = new Set(arr);
    
    // Number of unique elements
    const uniqueCount = uniqueElements.size;
    
    // Minimum removals needed to make all elements unique
    return arr.length - uniqueCount;
}

console.log(findMinRemoval2());

console.log(findMinRemoval())