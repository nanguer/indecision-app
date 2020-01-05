
const add = function (a,b) {
    console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001))


//Challenge

const multiplier = {
    //numbers - array of numbers
    numbers:[3,12,22],
    //multiplyBy - single number
    multiplyBy: 2,
    //multiply - return a new array where the number have been multplied
    multiply(){
       return this.numbers.map((number) => number*this.multiplyBy);
        
    }
};

console.log(multiplier.multiply());