/*In computer programming, loops are used to repeat a block of code.

For example, let’s say we want to show a message 100 times. Then instead of writing the print statement 100 times, we can use a loop.

That was just a simple example; we can achieve much more efficiency and sophistication in our programs by making effective use of loops.

Here we will see 3 types of loops:

for loop
while loop
do...while loop
for loop
The syntax of for-loop is:

for (initialization; condition; update) {
    // body of-loop 
}
Here,

initialization - initializes variables and is executed only once
condition - if true, the body of for loop is executed, if false, the for loop is terminated
update - updates the value of initialized variables and again checks the condition*/





var num = parseInt(readLine().trim());

function printOddNumber(N) {
    for (var i = 0; i < N; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
}

var N = 10;
printOddNumber(N);