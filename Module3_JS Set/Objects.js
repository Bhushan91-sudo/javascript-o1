/**
 * There is the phrase, “In JavaScript, objects are king. If you understand objects, you understand JavaScript.”.

In JavaScript, almost “everything” is an object. All JavaScript values, except primitives, are objects. Booleans/Numbers/Strings can be objects (if defined with the new keyword). Dates/Maths/Arrays/Functions are always objects.

JavaScript Primitives: A primitive value is a value that has no properties or methods. Primitive values are immutable (they are hardcoded and therefore cannot be changed). A primitive data type is a data that has a primitive value. E.g., if num = 5, you can change the value of num, but you cannot change the value of 5.

JavaScript has 5 types of primitive data types: string, number, boolean, null, undefined.

As we know, in JavaScript, variables can contain single values. Objects are variables, too, but objects can contain many values. We write them as name : value pairs (name and value separated by a colon).

Example:   
var Stud = {firstName:"Adarsh", lastName:"Chaudhary", age:21, eyeColor:"black"}; 
So we can say that A JavaScript object is a collection of named values. The named values in JavaScript objects are called properties.

The first way to create an Object using literal we saw in the above example. An object can also be created using a new keyword.

Example:   
var Stud = new Object();  
Stud.firstName = "Adarsh";  
Stud.lastName = "Chaudhary";  
Stud.age = 21;  
Stud.eyeColor = "black";
We may access JS Object properties in two ways:

objectName.property
objectName["property"]
New FOR loop {for (variable in object)}:

We have seen a normal for loop in the previous tutorial of the loop. Here we will see a new way of writing for loops to iterate through the properties of objects. Let us try to understand that through example.

var Stud = {firstName:"Adarsh", lastName:"Chaudhary", age:21, eyeColor:"black"};   
var temp = "";  
for (var x in Stud) {  
 temp += Stud[x] + " ";  
}  
 */
// Object created as per following code, You have to just print the subject name having highest marks.
/**
var Stud = new Object();
Stud.Maths = parseInt(readLine().trim());
Stud.Physics = parseInt(readLine().trim());
Stud.Chemistry = parseInt(readLine().trim());
*/
// YOUR CODE GOES HERE
var Object_Stud = {Maths: 20, Physics: 40, Chemistry: 30};
var highestMark = 0;
var highestSubject = "";

for (var subject in Object_Stud) {
    if (Object_Stud[subject] > highestMark) {
        highestMark = Object_Stud[subject];
        highestSubject = subject;
    }
}

console.log(highestSubject);