// There are N guests (numbered from 0 to N-1) in a sanatorium waiting to be assigned a room. In each room, any number of guests can be accommodated. However, not all guests like to have a lot of roommates.

// You are given an array A of N integers: the K-th guest wants to be in a room that contains at most A[K] guests, including themselves.

// Write a function:

// int solution(int A[], int N);

// that, given the array A, returns the minimum number of rooms needed to accommodate all guests.

// Examples:

// 1. Given A = [1, 1, 1, 1, 1], your function should return 5. Each guest should be accommodated in their own separate room.

// 2. Given A = [2, 1, 4], your function should return 2. The second guest should be accommodated in one room and the other two guests in another room.

// 3. Given A = [2, 7, 2, 9, 8], your function should return 2. The first and the third guests should be accommodated in one room and the other three guests in another room.

// 4. Given A = [7, 3, 1, 1, 4, 5, 4, 9], your function should return 4. The guests can be accommodated as follows: the first two guests in one room, the third and the fourth guests in two single rooms, and the other guests in another room.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..100,000].

function solution(A) {
    // Sort guests by descending preference
    A.sort((a, b) => b - a);

    // Create a data structure to represent rooms and their current size
    const rooms = [];


    // Iterate over each guest's preference in the sorted array.
    for (const guestPreference of A) {
        // Flag to indicate whether a suitable room has been found for the current guest.
        let foundRoom = false;

         // Attempt to place the guest in an existing room where the current occupancy does not exceed the guest's preference 
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] < guestPreference) {
                rooms[i]++;
                foundRoom = true;
                break;
            }
        }

        // If no room is found, create a new room
        if (!foundRoom) {
            rooms.push(1);
        }
    }

    return rooms.length;
}



// Test cases
console.log(solution([1, 1, 1, 1, 1])); // Should return 5
console.log(solution([2, 1, 4])); // Should return 2
console.log(solution([2, 7, 2, 9, 8])); // Should return 2
console.log(solution([7, 3, 1, 1, 4, 5, 4, 9])); // Should return 4

