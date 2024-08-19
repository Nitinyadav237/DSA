"use strict";
//  Beautiful String 0100
//generate 2 diff pattern and compare
function makeBeautful(str) {
    const n = str.length;
    let pattern1 = "";
    let pattern2 = "";
    //generating pattern
    for (let i = 0; i < n; i++) {
        pattern1 += i % 2 === 0 ? '0' : '1';
        pattern2 += i % 2 === 0 ? '1' : '0';
    }
    //count mismatch for both pattenr
    let countPattern1 = 0;
    let countPattern2 = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] !== pattern1[i])
            countPattern1++;
        if (str[i] !== pattern2[i])
            countPattern2++;
    }
    return Math.min(countPattern1, countPattern2);
}
const str11 = "0011110";
console.log(makeBeautful(str11));
