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

console.log("Ans to the Qu. No:3");
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([5, 5, 5, 6, 7])); 

console.log("Ans to the Qu. No:4");
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


console.log(celsiusToFahrenheit(25));

