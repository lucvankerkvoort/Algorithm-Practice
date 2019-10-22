const clouds = [0, 0, 0, 0, 1, 0, 1, 0];

const jumpingClouds = clouds => {
  let jumps = 0;
  let i = 0;

  while (i < clouds.length - 1) {
    if (i + 2 == clouds.length || clouds[i + 2] == 1) {
      i++;
      jumps++;
    } else {
      i += 2;
      jumps++;
    }
  }
  console.log(jumps);
};

jumpingClouds(clouds);
