"use strict";
function findKthCharDecrypt(encryp, k) {
    let i = 0;
    let lengthSoFar = 0;
    while (i < encryp.length) {
        //extract string
        let substr = "";
        while (i < encryp.length && isNaN(Number(encryp[i]))) {
            substr += encryp[i++];
        }
        //extract count
        let count = 0;
        while (i < encryp.length && !isNaN(Number(encryp[i]))) {
            count = count * 10 + Number(encryp[i++]);
        }
        //check if k is within segment
        const segmentLength = substr.length * count;
        if (lengthSoFar + segmentLength >= k) {
            const position = (k - lengthSoFar - 1) % substr.length; //-1 since 1 index 
            return substr[position];
        }
        //update lengthso far
        lengthSoFar += segmentLength;
    }
    throw new Error("K is out of bounds of the decrypted string.");
}
const encryptedString = "a2bcd12e3";
console.log(findKthCharDecrypt(encryptedString, 10));
