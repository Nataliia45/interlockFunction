function createFunction() {
    let total = 0;

    return function(num) {
        total += num;
        return total;
    };
}

const sumFunc = createFunction();
console.log(sumFunc(3)); // Виведе 3
console.log(sumFunc(5)); // Виведе 8
console.log(sum(20)); // Виведе 28