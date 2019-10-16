// These are the array triplets that we are going to compare
const a = [5, 6, 7];
const b = [3, 6, 10];

// this is the function that will compare the outcome of the indexes of a and b
const compareTheTriplets = (a, b) => {
  // we create the outcome of the comparison and set both scores to 0
  let outcome = [0, 0];

  //   We loop through either one of the arrays (because both lengths are the same)
  for (let i = 0; i < a.length; i++) {
    // when an instance of a is higher then one from b then we itterate the first index of the outcome array representing one point for a
    if (a[i] > b[i]) {
      outcome[0]++;
      //   if b on the other hand is bigger than a we do the same thing for b's position in the outcome array
    } else if (a[i] < b[i]) {
      outcome[1]++;
    }
  }

  console.log(outcome);
};

compareTheTriplets(a, b);
