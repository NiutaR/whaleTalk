let input = 'turpentine and turtles';
let vowels = ['u', 'e', 'i', 'a'];
//console.log(vowels);

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
    if (input[i] === 'e') {
        resultArray.push(input[i])
    }
}
console.log(resultArray.join('').toUpperCase());