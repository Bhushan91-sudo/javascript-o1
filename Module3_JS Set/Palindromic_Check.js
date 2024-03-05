/**
 * For a given input lowercase character string, print Yes if the string is a palindrome, else print No.

Sample Input 1

abba
Sample Output 1

Yes
Sample Input 2

baa
Sample Output 2

No
 */
function isPalindrome(str) {
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    
    // Check if the original string is equal to its reverse
    if (str === reversedStr) {
        return 'Yes';
    } else {
        return 'No';
    }
}

// Read input
const input = readLine().trim();

// Check if input is a palindrome and print the result
console.log(isPalindrome(input));