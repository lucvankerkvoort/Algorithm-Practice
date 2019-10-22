// This algorithm solves a mathmatical problem for a cloud jumping game.
// In the game you can jump on fluffy clouds but not on thunder clouds.
// Therefore we have created an algorithm that calculates the least amount of jumps needed to finish the game

// this is the array of clouds, the 0's represent the clouds we can jump on and the 1's represent the thunder clouds which we cannot jump on.
const clouds = [0, 0, 0, 0, 1, 0, 1, 0];

// this is the function we use to calculate the amount of jumps
const jumpingClouds = clouds => {
  // we start with setting the jumps to 0 so we can itterate everytime we jump
  let jumps = 0;
  // We set the index to 0 so we can itterate from the starting position in the array
  let i = 0;

  //   as long as we haven't reached the end of the array this function will keep running
  while (i < clouds.length - 1) {
    //   when we jump and go past the endpoint or when we jump two spaces we itterate the jump number and we only jump 1 space
    if (i + 2 == clouds.length || clouds[i + 2] == 1) {
      i++;
      jumps++;
    } else {
      // otherwise we will jump 2 spaces and itterate the jumps
      i += 2;
      jumps++;
    }
  }
  //   we check the total amount of jumps we have taken
  console.log(jumps);
};

jumpingClouds(clouds);
