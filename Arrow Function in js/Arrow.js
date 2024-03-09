/**
 * rrow function {()=>} is concise way of writing JavaScript functions in shorter way. Arrow functions were introduced in the ES6 version. They make our code more structured and readable.

Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to any variable. They are also called Lambda Functions.

Syntax:

const gfg = () => {
    console.log( "Hi Bhushan!" );
}
 */

/**
 * Advantages of Arrow Functions
Arrow functions reduce the size of the code.
The return statement and function brackets are optional for single-line functions.
It increases the readability of the code.
Arrow functions provide a lexical this binding. It means, they inherit the value of “this” from the enclosing scope. This feature can be advantageous when dealing with event listeners or callback functions where the value of “this” can be uncertain.
Limitations of Arrow Functions
Arrow functions do not have the prototype property.
Arrow functions cannot be used with the new keyword.
Arrow functions cannot be used as constructors.
These functions are anonymous and it is hard to debug the code.
Arrow functions cannot be used as generator functions that use the yield keyword to return multiple values over time.
Supported Browsers
Chrome 45 and above
Edge 12 and above
Firefox 22 and above
Opera 32 and above
Safari 10 and above

 */

const bhu = ( x, y, z = 30 ) => { 
    console.log( x + " " + y + " " + z); 
} 
  
bhu( 10, 20 );

/**
 * output
 * 10 20 30
 */