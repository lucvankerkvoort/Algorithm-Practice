// This is a matrix of numbers that we want to figure out the diagonal differences from
const ar = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

// This is the function that will calculate the difference
const diagonalDifference = ar => {
  // we create variables to store all the answers in

  // this is the length of the matrix (which is 3 because there are 3 arrays inside of our array)
  const length = ar.length;
  //   we set a container for the first diagonal sum
  let diagonal1 = 0;
  //   we set a container for the second diagonal sum
  let diagonal2 = 0;

  //   we loop through the matrix
  for (let i = 0; i < length; i++) {
    //   we itterate through each of the inner arrays and loop through each one of their indexes
    //  if i = 0 then we are looping through [11,2,4] then we do i which is index 0 which means 11.
    // then we itterate i meaning i becomes 1 which means it is inner array 2 [4,5,6] and then we take index 1 which is 5 and so on till the end of the array.
    diagonal1 += ar[i][i];

    // for the other diagonal we start at the last part of the array (the length of the array (3) - 1 (because we are using indexes and they start with 0) and then we do minus 1)
    diagonal2 += ar[length - 1 - i][i];
  }

  //   We create the comparison in a constant
  const comparison = diagonal1 - diagonal2;
  //   we set it to absolute so if its a negative number it will still show the comparison.
  const solution = Math.abs(comparison);

  console.log(solution);
};

diagonalDifference(ar);
