/**
 * Please note that this section will contain the use of Functions. To understand it better it is advised to go through the Function section first.

filter() Method:

It is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.

Syntax: array.filter(callback(element, index, arr), thisValue)
where,

callback: This parameter holds the function to be called for each element of the array.
element: The parameter holds the value of the elements being processed currently.
index: This parameter is optional, it holds the index of the current value element in the array starting from 0.
arr: This parameter is optional, it holds the complete array on which Array.filter() is called.
thisValue: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.
This method returns a new array consisting of only those elements that satisfied the condition of the arg_function.

Example: 
var A = [112, 52, 0, -1, 944];
var z = A.filter(isPositive);
function isPositive(value) {
  return value > 0;
}
In the above example, [112,52,944] will be stored in a z array.

map() Method:

It creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally, map() method is used to iterate over an array and calling a function on every element of the array.

Syntax: array.map(callback(element, index, arr), thisValue)
where,

callback: This parameter holds the function to be called for each element of the array.
element: The parameter holds the value of the elements being processed currently.
index: This parameter is optional, it holds the index of the current value element in the array starting from 0.
arr: This parameter is optional, it holds the complete array on which Array.map() is called.
thisValue: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.
This method returns a new array consisting of only those elements that satisfied the condition of the arg_function.

Example:
var A = [1, 2, 3, 4];
var z = A.map(myFunction)
function myFunction(num) {
  return num * 10;
}
 */
// DO NOT USE ARGUMENTS FOR INPUTS
// Vaiable size_ is the size of input array.
// Variable A stores all the array elements
function multiplyBy2(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
}

// Function to filter elements divisible by 8
function divisibleBy8(arr) {
    return arr.filter(function(num) {
        return num % 8 === 0;
    });
}


var size_ = parseInt(readLine().trim());
var A = []
for(var i = 0 ; i < size_; i++ ){
    var x = parseInt(readLine().trim());
    A.push(x);
}

var arrayB = multiplyBy2(A);

// Create array C by filtering elements divisible by 8 from array B
var arrayC = divisibleBy8(arrayB);

// Print each element of array C
for (var i = 0; i < arrayC.length; i++) {
    console.log(arrayC[i]);
}

