// This is the array we are going to use for our function
const ar = [1, 2, 3, 4, 10, 11];

// This is the function we are using to pring the sum of the array
const functionArr = ar => {
  // we create a container with a value of 0
  let n = 0;

  //   we loop through the entire array
  for (let i = 0; i < ar.length; i++) {
    // we change the indexes of the array into a number so we can use math on it
    // then we add every single index of the array to the container named n
    n += parseInt(ar[i]);
  }

  //   then we log the container n
  console.log(n);
};

// we initiate the function
functionArr(ar);
