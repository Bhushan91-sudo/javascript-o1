/**
 * We can create Javascript functions in many ways.

function hello() {
    console.log("Hello world");
}

const hi = function hi() {
    console.log("Hi world");
}

const bye = function() {  //using anonymous function
    console.log("Bye world");
}
The above three methods of declaration are refered as regular function declaration.

The only difference in the above declarations is in the stack trace that appears when there is an error.

Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax.

const hello = () => {
    console.log("Hello world");
}
If the function has only one statement, and the statement returns a value, we can remove the brackets and the return keyword.

For e.g.

Regular Function

function helloName(name) {
    return "Hello " + name;
}
Arrow function

const helloName = (name) => "Hello " + name;
So, Arrow functions lets us write functions even in a single line!

If we have one parameter, we can even omit the parentheses that enclose the parameter

const helloName = name => "Hello " + name;
 

Both arrow functions and regular functions can be used as object methods.

 

Now, lets see where the differences emerge between the different function declaring and defining methods.

1) this binding

Regular functions have their own dynamic this binding, while arrow functions do not have their own this.

The value of this inside a regular function depends on how the function is invoked.

During a simple invocation the value of this equals to the global object (or undefined if the function runs in strict mode)

 function fun() {
       console.log(this);
 }
 fun(); // prints global object (window) 
During a method invocation the value of this is the object owning the method:

 const obj = {
  fun() {
    console.log(this);
  }
};
obj.fun(); // prints obj 
The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

In the following example, fun1() is an outer regular function of fun2() arrow function:

const obj = {
  fun1(items) {
    console.log(this); // prints obj
    const fun2 = () => {
      console.log(this); // prints obj
   };
  }
};
this value inside the arrow function fun2() equals to this value of the outer function fun1().

 2) arguments object

Inside the body of a regular function, arguments is a special array-like object containing the list of arguments with which the function has been invoked.

function fun() {
  console.log(arguments);
}

myFunction('a', 'b'); // prints { 0: 'a', 1: 'b'}
No arguments object is defined inside an arrow function.

The arguments object is resolved lexically: the arrow function accesses arguments from the closest outer non-arrow function.

function fun1() {
  const fun2 = () => {
    console.log(arguments);
  }

  fun2('c', 'd');
}

fun1('a', 'b'); // prints { 0: 'a', 1: 'b' }
 3) new keyword

Regular functions created using function declarations or expressions are constructible (means that we can use regular functions as constructors) and callable. And since regular functions are constructible, they can be called using the new keyword.

function fun(){
    console.log("hello");
}
const obj = new fun(); //valid code
The arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be called with the new keyword.

let fun = () => {
   console.log("hello);
}
const obj = new fun(): // Gives error
Find the output for the given code below.

let obj = {
    a: 100,
    fun1() {
        let a = 20;
        let fun2 = () => {
            console.log(this.a);
        }
        fun2();
    }
}
 */
/**
 * Ans = 100
 */