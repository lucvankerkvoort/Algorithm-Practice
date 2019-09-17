// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// This is the sorted array that we are going to remove duplicates from
const sortArr = [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5];

// This is the function that will take out the duplicates, it takes the sorted array as an argument
const removeDuplicates = sortArr => {
  // We loop through the array so we can check the different numbers with each other
  for (let i = 0; i < sortArr.length; i++) {
    //   if the first number is the same as the second number
    if (sortArr[i] === sortArr[i + 1]) {
      // Remove the number from the array
      sortArr.splice([i], 1);
      //   Go back to the start of the array so we don't miss any of the numbers
      i -= 1;
    }
  }
  //   Return the sorted array
  return sortArr;
};

console.log(removeDuplicates(sortArr));
