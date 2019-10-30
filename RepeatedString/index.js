const string = "aba";
const number = 10;

const repeatedString = (string, number) => {
  let occurances = 0;
  let repeatedString = string.repeat(number);

  console.log(repeatedString);
  for (let i = 0; i < number; i++) {
    if (repeatedString[i] === "a") {
      occurances++;
    }
  }
  console.log(occurances);
};

repeatedString(string, number);
