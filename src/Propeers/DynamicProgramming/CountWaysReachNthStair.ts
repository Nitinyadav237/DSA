

function countWays(n: number): number{
    if (n <= 1) return 1
    let prev0 = 1//(ways(0))
    let prev1 = 1//(ways(1))
    for (let i = 2; i <= n; i++){
        let current = prev0 + prev1;
        prev0 =prev1 ;
        prev1=current
    }
    return prev1
}
console.log(countWays(4))