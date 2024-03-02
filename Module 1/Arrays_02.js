/**
 * An array is a collection of similar data types under the same name. We may say that they are special variable, which can hold more than one value at a time. Also we may access the values by referring to an index number.

Creating Arrays in JavScript:

Using an array literal: var array_name = [item1, item2, …];

Using JS Keywaord new: var array_name = new Array(“item1”, “item2”, …);

Accessing elements:

We may easily access an array element by referring to the index number.

Example: 
 var stud = ["Adarsh", "Harsh", "Shivam"];
 console.log(stud[1]);
Here, Harsh will be printed since we are referring to 1st(0-indexing) element of stud array.
Updating elements:

We may easily update an array element again by referring to the index number.

Example: 
 var stud = ["Adarsh", "Harsh", "Shivam"];
 stud[1] = "Kunj";
 console.log(stud[1]);
Here, Kunj will be printed since we are referring to 1st(0-indexing) element of stud array.
Printing the whole elements:

We may easily printall array elements just by calling the array name.

Example: 
 var stud = ["Adarsh", "Harsh", "Shivam"];
 console.log(stud);
Here, [ 'Adarsh', 'Harsh', 'Shivam' ] will be printed since we are referring to 1st(0-indexing) element of stud array. 
Iterating over the array:

Using a for loop and maintaining an index for the elments we may easily do it.

Example: 
 var stud = ["Adarsh", "Harsh", "Shivam"];
 for(var i = 0 ; i<3;i++){
    console.log(stud[i]);
 }
Here, we it will print Adarsh, Harsh and Shivam in 3 lines.
Try the following example in the editor below.

You are given array of integers with it’s size. Update and then print array elememts where new_arr[i] = old_arr[i] + i. Please note that you have to print one element in one line.

Sample Input:

4(Size)
1
2
3
4
Sample Output:

1
3
5
7
 */

var size_ = parseInt(readLine().trim());
var array_ = []
for(var i = 0 ; i < size_; i++ ){
    var x = parseInt(readLine().trim());
    array_.push(x);
}

for (var i = 0; i < size_; i++) {
    var new_value = array_[i] + i;
    console.log(new_value);
}