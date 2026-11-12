
function checkPrime(number) {
    if (number <= 1) {
        return "Not a Prime Number";
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return "Not a Prime Number";
        }
    }

    return "Prime Number";
}

console.log(checkPrime(7));
console.log(checkPrime(10));
