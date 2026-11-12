
let numbers = [10, 15, 20, 25, 30, 35];

let even = 0;
let odd = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Even:", even);
console.log("Odd:", odd);
