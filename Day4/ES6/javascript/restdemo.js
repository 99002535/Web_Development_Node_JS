var sumOfNums = (...arguments) => {
    var sum = 0;
    for (let i in arguments) {
        sum += arguments[i];
    }
    return sum;
} 
console.log(sumOfNums(10,20));