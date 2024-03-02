/**In JavaScript we also have strings which represents a sequence of characters. They can be used for storing and manipulating text.

There are 2 ways to create string in JavaScript:

By string literal: The string literal is created using double quotes.

Example: var stringname="string value"; 
By string object: It is done using new keyword. We will talk about objects more in later sections.

Example: var stringname=new String("string literal");  
String Length: To find the length of a string, we may use length property.

Example:
 var x = "abcd";
 var z = x.length;
Here, 4 will be stored in z.
Note: Suppose we store “I am “Adarsh” Chaudhary” in some variable then only “I am “ will be stored. To avoid this situation we use backslash escape character. It makes special charatcer into string characters. So here we should use “I am "Adarsh" Chaudhary”.

Try the following example in the editor below.

You are given a string S, you have to print the string followed by it’s length. */
var num = readLine().trim();
var S = "adarsh";
var length = S.length;

console.log(S + length);