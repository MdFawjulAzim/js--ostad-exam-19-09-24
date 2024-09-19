console.log("Ans to the Qu. No:1");
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));


console.log("Ans to the Qu. No:2");
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray([1, 2, 3, 4]));
