function generatePermutations(str: string): string[] {
    const permutations: string[] = [];

    function backtrack(currentStr: string[], index: number): void {
        if (index === currentStr.length) {
            permutations.push(currentStr.join(''));
            return;
        }

        for (let i = index; i < currentStr.length; i++) {
            [currentStr[index], currentStr[i]] = [currentStr[i], currentStr[index]];
            backtrack(currentStr, index + 1);
            [currentStr[index], currentStr[i]] = [currentStr[i], currentStr[index]];
        }
    }

    backtrack(str.split(''), 0);
    return permutations;
}

const result122 = generatePermutations("ab");
console.log(result122);
