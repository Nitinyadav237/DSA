// Container With Most Water

function maxArea(arr: number[]): number{
    let left = 0
    let right = arr.length-1
    let maxareas = 0
    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(arr[left], arr[right])
        let area = width * minHeight
        //update max area
        maxareas = Math.max(area, maxareas)
        if (arr[left] < arr[right]) {
            left++
        } else {
            right--
        }
    }
    return maxareas
}

const arr11 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(arr11))