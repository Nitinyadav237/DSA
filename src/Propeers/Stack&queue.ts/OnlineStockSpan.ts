//  Online Stock Span


function onlineStockSpan(prices: number[]): number[]{
    let span = new Array(prices.length)
    let stack: number[] = []
    for (let i = 0; i < prices.length; i++){
        const curr = prices[i]               //4<=2
        while (stack.length > 0 && prices[stack.length - 1] <= curr) {
            stack.pop()
        }
        span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1]
        stack.push(i)
    }
    return span
}
const prices = [100, 80, 60, 70, 60, 75, 85];
console.log(onlineStockSpan(prices));