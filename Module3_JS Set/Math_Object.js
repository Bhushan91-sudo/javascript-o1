/**
 * The JavaScript Math object allows us to perform mathematical tasks on numbers by providing some mathematical constant values and utility methods (for e.g trignometric and logarithmic functions).

Unlike other global objects such as Date, Math is not a constructor. All the properties and methods of Math are static and can be called by using Math as an object without creating an instance of it.

Note: Math can only work with the Number type.

Some static properties of Math:

Math.E : Euler's constant and the base of natural logarithms; approximately 2.718.
Math.LN2 : Natural logarithm of 2; approximately 0.693.
Math.LN10 : Natural logarithm of 10; approximately 2.303.
Math.LOG2E : Base-2 logarithm of E; approximately 1.443.
Math.LOG10E : Base-10 logarithm of E; approximately 0.434.
Math.PI : Ratio of the a circle's circumference to its diameter; approximately 3.14159.
Math.SQRT2 : Square root of 2; approximately 1.414.
 

Some static methods of Math:

Math.abs(x) : Returns the absolute value of x.
Math.cbrt(x) : Returns the cube root of x.
Math.ceil(x) : Returns the smallest integer greater than or equal to x.
Math.exp(x) : Returns Ex, where x is the argument, and E is Euler's constant (2.718…, the base of the natural logarithm).
Math.floor(x) : Returns the largest integer less than or equal to x.
Math.log(x) : Returns the natural logarithm (loge; also, ㏑) of x.
Math.max([x[, y[, …]]]) : Returns the largest of zero or more numbers.
Math.min([x[, y[, …]]]) : Returns the smallest of zero or more numbers.
Math.pow(x, y) : Returns base x to the exponent power y (i.e, xy).
Math.random() : Returns a pseudo-random number between 0 and 1.
Math.round(x) : Returns the value of the number x rounded to the nearest integer.
Math.sqrt(x) : Returns the positive square root of x.
Math.trunc(x) : Returns the integer portion of x, removing any fractional digits.
Try the following example in the editor below.

You are given a positive number A denoting the radius of a sphere as input. You have to calculate and print the volume of the sphere.

Volume of a sphere having radius R is given by (4 * π * R3) / 3.

NOTE: Since, the answer can be a real number, you have to print the ceil value of the volume. Ceil value of a real number x is the smallest integer that is greater than or equal to x.

Sample Input

1
Sample Output

5
Sample Explanation

Volume of sphere having radius 1 units = 4.19
Ceil value of volume = 5 
 */
const radius = parseInt(readLine().trim());

// Calculate the volume of the sphere
const volume = (4 * Math.PI * Math.pow(radius, 3)) / 3;

// Print the ceil value of the volume
console.log(Math.ceil(volume));