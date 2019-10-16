const ar = [1, 2, 3, 4, 10, 11];

const functionArr = ar => {
  let n = 0;

  for (let i = 0; i < ar.length; i++) {
    n += parseInt(ar[i]);
  }

  console.log(n);
};

functionArr(ar);
