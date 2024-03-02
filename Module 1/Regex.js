/**As we all know, regular expression is a sequence of characters that forms a search pattern. Here in JavaScript the search pattern can be used for text search and text replace operations in much powerful way.

SYNTAX: /pattern/modifiers;

Example: var patt = /adarsh/i;
Here, adarsh is a pattern and i is a modifier(represents make search case-insensitive)
We can combine REGEX with string methods like search() and replace() to make our operations easy.

Using search(): The search() method searches a string for a specified value and returns the position of the match.

Example: 
 var str = "I'm Adarsh!";
 var z = str.search("/adarsh/i");
Here, 4 will be stored in z as adarsh is presentin original string. Please note here we have used modifier i due to which Adarsh can search adarsh.
Using replace(): The replace() method replaces a specified value with another value in a string.

Example: 
 var str = "I'm Adarsh";
 var z = str.replace(/adarsh/i, "Harshdeep");
Here, I'm Harshdeep will be stored in z  variable.
Some of the REGEX patterns are:

[abc]: Find any of the characters between the brackets.
[0-9]: Find any of the digits between the brackets.
(x|y): Find any of the alternatives separated with |.
\d: Find a digit.
\s: Find a whitespace character.
\b: Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b.
\uxxxx: Find the Unicode character specified by the hexadecimal number xxxx.
test(): We have a special feature in JavaScript of test() method. It searches a string for a pattern, and returns true or false, depending on the result.

Example: 
 var patt = /e/;
 patt.test("Sun and Moon are friend");
Since there is an "e" in the string, the output of the code above will be: true
Also please note we may use let new RegExp(pattern, “modifier”) to create our own REGEX with required pattern and modifier.

Try the following example in the editor below.

You are given a string Str and a pattern Patt, you have to search Patt in Str and print true if it is present otherwise print false. Make search case insensitive.

Sample Input:

adarsh
arsh
Sample Output:

true */

var Str = readLine().trim();
var Patt = readLine().trim();
//var Str = "adarsh";
//var Patt = "arsh";

var regex = new RegExp(Patt, "i");

var result = regex.test(Str);

console.log(result);
