//In this file are defined various methods on how to avoid using loops in js.

// #1: I need to go over an array and get a single value as a result

// reduce method, reduces the elements of an array into just one element.
// it can be used as a separate method and like an lambda.
// it operates with 2 values, one is the total amount and the current element value
// then it returns the total.
// In a single expression we iterate over each of the array elements and make
// and adding/multiplying or making an operation that bind them togheter
var numbers = [1, 2, 3, 4, 5]
var sumReducer = (array) => array.reduce(
    (total, current) => total + current, 0) //this 0 is the init value of total
console.log(sumReducer(numbers))

var mulReducer = (total, currentValue) => total * currentValue
console.log(numbers.reduce(mulReducer))

// #2: I need to create a new array from a given one and transform all the elements

// map function iterates through elements of a array and calls a given functions on each elements
// a new array will be created with the given function called on each element.
// The map() method creates a new array with the results of calling
// a provided function on every element in the calling array.

var newArray = numbers.map(element => element * element)
console.log(newArray)

// #3: I need to do something with side effects n times
// recursive handling.
const operateNTimes = (n, f) => {
    const body = (m) => {
        if( m > n) return;
        f(m);
        return body(m + 1);
    }
    return body(1);
}

operateNTimes(10, print);

function print(x) {
    console.log(x)
}
