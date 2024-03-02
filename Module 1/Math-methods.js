/*In JavaScript, we have math methods that can be used without actually creating them. It allows us to perform mathematical tasks on numbers.

Example: Math.LN2
It returns the natural logarithm of 2.
Some of the math properties(constants) are:

 Math.E        // returns Euler's number
 Math.PI       // returns PI
 Math.SQRT2    // returns the square root of 2
 Math.SQRT1_2  // returns the square root of 1/2
 Math.LN2      // returns the natural logarithm of 2
 Math.LN10     // returns the natural logarithm of 10
 Math.LOG2E    // returns base 2 logarithm of E
 Math.LOG10E   // returns base 10 logarithm of E 
Some of the Math methods are:

abs(x)        // Returns the absolute value of x
cbrt(x)       // Returns the cubic root of x
ceil(x)       // Returns x, rounded upwards to the nearest integer
clz32(x)      // Returns the number of leading zeros in a 32-bit binary representation of x
exp(x)        // Returns the value of Ex
expm1(x)      // Returns the value of Ex minus 1
floor(x)      // Returns x, rounded downwards to the nearest integer
fround(x)     // Returns the nearest (32-bit single precision) float representation of a number
log(x)        // Returns the natural logarithmof x
log10(x)      // Returns the base-10 logarithm of x
log1p(x)      // Returns the natural logarithm of 1 + x
log2(x)       // Returns the base-2 logarithm of x
pow(x, y)     // Returns the value of x to the power of y
random()      // Returns a random number between 0 and 1
round(x)      // Rounds x to the nearest integer
sign(x)       // Returns the sign of a number (checks whether it is positive, negative or zero)
sqrt(x)       // Returns the square root of x
trunc(x)      // Returns the integer part of a number (x)
max(x, y, z, ..., n)  // Returns the number with the highest value
min(x, y, z, ..., n)  // Returns the number with the lowest value
Example: Suppose we want to find the max among 1,7 and 77, then Math.max(1,7,77) will give us the required results.

Some of the Trigonometric methods are:

acos(x)       // Returns the arccosine of x, in radians
acosh(x)      // Returns the hyperbolic arccosine of x
asin(x)       // Returns the arcsine of x, in radians
asinh(x)      // Returns the hyperbolic arcsine of x
atan(x)       // Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)   // Returns the arctangent of the quotient of its arguments
atanh(x)      // Returns the hyperbolic arctangent of x
cos(x)        // Returns the cosine of x (x is in radians)
cosh(x)       // Returns the hyperbolic cosine of x
sin(x)        // Returns the sine of x (x is in radians)
sinh(x)       // Returns the hyperbolic sine of x
tan(x)        // Returns the tangent of an angle
tanh(x)       // Returns the hyperbolic tangent of a number
Try the following example in the editor below.

You are given an integer N, you have to print the nearest integral value for the base-2 logarithm of N. */
// Input num valus is in variable *num*
var num = parseInt(readLine().trim());
var N = num;
var result = Math.round(Math.log2(N));

console.log(result);