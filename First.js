// Write a function solution that, given an integer N, returns a string of length N containing as many different lower-case letters ('a'-'z') as possible, in which each letter occurs an equal number of times.

// Examples:

// 1. Given N = 3, the function may return "fig", "pea", "nut", etc. Each of these strings contains three different letters with the same number of occurrences.

// 2. Given N = 5, the function may return "mango", "grape", "melon", etc.

// 3. Given N = 30, the function may return "aabbcc...oo" (each letter from 'a' to 'o' occurs twice). The string contains 15 different letters.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..200,000].


function solution(N) {
    let result = '';
    // Determine how many times each letter should appear
    const appearances = Math.ceil(N / 26);

    // Build the initial sequence of unique letters
    for (let i = 0; i < 26 && result.length < N; i++) {
        result += String.fromCharCode('a'.charCodeAt(0) + i).repeat(appearances);
    }

    // If the result is too long, trim it to N
    if (result.length > N) {
        result = result.substring(0, N);
    } else {
        // Otherwise, repeat the sequence until we reach N
        while (result.length < N) {
            result += result.substring(0, N - result.length);
        }
    }

return result;
}

// Test cases
console.log(solution(3)); // Should print a string like "abc"
console.log(solution(5)); // Should print a string like "abcde"
console.log(solution(30)); // Should print a string like "aabbccddeeffgghhiijjkkllmmnnooop"