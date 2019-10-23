/* John works at a clothing store. 
He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.
*/

// The number of socks in the pile
const n = 7;
// The numbers represent the different color socks
const ar = [1, 2, 1, 2, 1, 3, 2];

// Solution

const matchingPairs = (n, ar) => {
  // The array sorted in ascending  order
  let sortedAr = ar.sort((a, b) => a - b);
  // The starting position for the number of pairs we have
  let pairs = 0;

  //   Looping through the array
  for (i = 0; i < n - 1; i++) {
    //   checking each of the index of the sorted array with the next index of the sorted array
    if (sortedAr[i] === sortedAr[i + 1]) {
      // if the index matches the next index we itterate pairs by 1 and move the index up by 1
      pairs++;
      i += 1;
    }
    // we return pairs to show the amount of matched pairs we have found.
  }
  return pairs;
};

// We show the outcome as it comes out
console.log(`Total ${matchingPairs(n, ar)} pairs of socks`);
