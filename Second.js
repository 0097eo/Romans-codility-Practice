// You are given a string S consisting of N digits. What is the largest sum of two two-digit fragments of S? The selected fragments cannot overlap.

// Write a function:

// int solution(char *S);

// that, given a string S, returns the largest sum of two two-digit numbers that are non-overlapping fragments of S.

// Examples:

// 1. Given S = "43798", the function should return 141. The chosen fragments are "43" and "98": "43 7 98"

// 2. Given S = "00101", the function should return 10. The chosen fragments are "00" and "10": "00 10 1". Note that fragments "01" and "10" cannot be chosen as they overlap.

// 3. Given S = "0332331", the function should return 66. The chosen fragments are "33" and "33": "0 33 2 33 1".

// 4. Given S = "00331", the function should return 34. The chosen fragments are "03" and "31": "0 03 31"

// Assume that:

// N is an integer within the range [4..100];
// string S is made only of digits (0−9).