const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const aVeryBigSum = ar => {
  let solution = 0;

  for (let i = 0; i < ar.length; i++) {
    solution += ar[i];
  }

  console.log(solution);
};

aVeryBigSum(ar);
