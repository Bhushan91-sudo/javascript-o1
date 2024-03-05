/**
 * Recursion is the process of repeating items in a self-similar way. In programming languages, if a program allows you to call a function inside the same function, then it is called a recursive call of the function.

Lets see an example of recursive code in JavaScript.

function recurse() {
 // function code
 recurse();
 // function code
}

recurse();
Here, the recurse() function is a recursive function. It is calling itself inside the function.

                   image
 

While using recursion, one need to be careful to define an exit condition from the function, otherwise it will go into an infinite loop.

function fun() {
 if(condition) {
 fun();
 }
 else {
 // stop calling fun()
 //code
 return;
 }
}

fun();
Recursive functions are very useful to solve many mathematical problems.

Try the following example in the editor below.

Given an input number A, find Ath fibonacci number.

fib0 = 0
fib1 = 1
fibi = fibi-2 + fibi-1  (i > 1)
Sample Input

3 
Sample Output

2
 */

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const input = parseInt(readLine().trim());
console.log(fibonacci(input));