/**JavaScript provides a lot of string methods which help in working with strings. Some of them are:

charAt(): It provides the char value present at the specified index.
charCodeAt(): It provides the Unicode value of a character present at the specified index.
concat(): It provides a combination of two or more strings.
indexOf(): It provides the position of a char value present in the given string.
lastIndexOf(): It provides the position of a char value present in the given string by searching a character from the last position.
search(): It searches a specified regular expression in a given string and returns its position if a match occurs.
match(): It searches a specified regular expression in a given string and returns that regular expression if a match occurs.
replace(): It replaces a given string with the specified replacement.
substr(): It is used to fetch the part of the given string on the basis of the specified starting position and length.
substring(): It is used to fetch the part of the given string on the basis of the specified index.
slice(): It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
toLowerCase(): It converts the given string into lowercase letter.
toLocaleLowerCase(): It converts the given string into lowercase letter on the basis of host?s current locale.
toUpperCase(): It converts the given string into uppercase letter.
toLocaleUpperCase(): It converts the given string into uppercase letter on the basis of host?s current locale.
split(): It splits a string into substring array, then returns that newly created array.
trim(): It trims the white space from the left and right side of the string.
Examaple 1:
 var x ="Adarsh ";  
 var y ="Chaudhary";  
 var z = x.concat(y);  
Here z will store Adarsh Chaudhary.
Examaple 2:
 var x = "Adarsh Chaudhary";  
 var z = x.toUpperCase();  
Here z will store ADARSH CHAUDHARY.
Examaple 3:
 var x = "    Adarsh    ";  
 var z = x.trim();  
Here z will store Adarsh. 
Try the following example in the editor below.

You are given a string S, you have to print the string after combining it with it’s UPPERCASE form.

Sample Input:

adarsh

Sample Output:

adarshADARSH */

var num = readLine().trim();
//var S = "adarsh";
var combinedString = num + num.toUpperCase();

console.log(combinedString);