// In an even word, each letter occurs an even number of times.

// Write a function solution that, given a string S consisting of N characters, returns the minimum number of letters that must be deleted to obtain an even word.

// Examples:

// 1. Given S = "acbcbba", the function should return 1 (one letter b must be deleted).

// 2. Given S = "axxaxa", your function should return 2 (one letter a and one letter x must be deleted).

// 3. Given S = "aaaa", your function should return 0 (there is no need to delete any letters).

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..200,000];
// string S is made only of lowercase letters (a−z).

function solution(S) {
    let count = {};
    let deletions = 0;

    // Count occurrences of each letter
    for (let char of S) {
        count[char] = (count[char] || 0) + 1;
    }

    // Count necessary deletions
    for (let char in count) {
        if (count[char] % 2 !== 0) {
            deletions++;
        }
    }

    return deletions;
}

// Test cases
console.log(solution("acbcbba")); // Should return 1
console.log(solution("axxaxa"));  // Should return 2
console.log(solution("aaaa"));    // Should return 0