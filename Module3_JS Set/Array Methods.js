/**
 * In JavaScript, we have a couple of more methods to sort the array, find min/max in the array, reverse the array, etc. These are very much useful while solving complex programming questions. Let us see them one by one:

sort():

Example:
 var stud = ["Adarsh", "Utkarsh", "Harsh", "Shivam"];
 stud.sort(); 
Now stud will become: ["Adarsh", "Harsh", "Shivam", "Utkarsh"]
reverse():

Example:
 var stud = ["Adarsh", "Utkarsh", "Harsh", "Shivam"];
 stud.reverse(); 
Now stud will become: ["Shivam", "Harsh", "Utkarsh", "Adarsh"]
In JavaScript, if we use the sort() function, it will sort values as strings. That means 68 will be kept after 1222 as it is lexicographically greater than 1222 but mathematically it should present before 1222. So we can’t use the sort() function directly for sorting numbers. We may solve this issue using compare function.

Compare Function

Using compare function we may define our own sorting order over the elements. The compare function should return a negative, zero, or positive value, depending on the arguments.

Let us take an example to understand it. If we sort the array of numbers then it will not be sorted mathematically but lexicographically. Suppose we want to make a compare function to sort them in increasing order mathematically.

The required function will be: function(a, b){return a - b} and to sort using it we will write array.sort(function(a, b){return a - b}).

The compare function compares all the values in the array, two values at a time (a, b) and

If the result is negative a is sorted before b
If the result is positive b is sorted before a
If the result is 0 no changes are done with the sort order of the two values.
 */
function printSortedArray(arr) {
    arr.sort(function(a, b) {
        return a-b;
    });
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
var size_ = parseInt(readLine().trim());
var array_ = []
for(var i = 0 ; i < size_; i++ ){
    var x = parseInt(readLine().trim());
    array_.push(x);
}

//Call the function to print the sorted array
printSortedArray(array_);


