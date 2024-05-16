/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

/**
 * Takes an array of ones and zeroes and converts it to a base 10 integer.
 * @param {Array} arr - The array of ones and zeroes.
 * @return {number} The base 10 integer equivalent of the binary array.
 * 
 * Step 1: Join the array into a single string by using the empty string as a separator.
 * 
 * Step 2: Pass the joined string and the base 2 radix to parseInt. This will parse the binary string as a base 10 integer.
 * 
 */
function binaryArrayToNumber(arr) {
    return parseInt(arr.join(""), 2);
}

