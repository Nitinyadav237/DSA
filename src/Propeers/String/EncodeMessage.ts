// Encode the Message
// "aaaabbbccdaa"
function encodeMsg(message: string): string{
    
    if (message.length === 0) return "";
    let encoded = " "
    let count = 1;
    for (let i = 1; i < message.length; i++){
        if (message[i] === message[i - 1]) {
            count++
        } else {
            encoded += message[i - 1] + count //a4
            count=1 //resetting count
        }
    }
    encoded += message[message.length - 1] + count;
    return encoded
}
const inputMessage = "aaaabbbccdaa";
console.log(encodeMsg(inputMessage))