/*Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike. */

// The number of steps that Gary has taken
const n = 8;
// The different type of steps Gary takes, U meaning up and D meaning down, compiled into a string
const s = "UDDDUDUU";

const upsAndDowns = (n, s) => {
  //    The elevation Gary starts at (0 is sea level)
  let elevation = 0;
  //   The Valley's Gary starts his hike at
  let valleyCount = 0;

  //   This will count the previous elevation
  let previousElevation = 0;

  //   We loop through the amount of steps that Gary has taken
  for (i = 0; i < n; i++) {
    //   We set the previous Elevation to the elevation on this particular step
    previousElevation = elevation;
    // We check to see whether Gary took a step up or down and itterate the elevation accordingly
    if (s[i] === "U") {
      elevation++;
    } else if (s[i] === "D") {
      elevation--;
    }

    // If at the start of Gary's step he was at Sea level and he took a step down (meaning he went below 0) We count a valley.
    if (previousElevation === 0 && elevation < 0) {
      valleyCount++;
    }
  }
  //   After all the steps have been looped through we return the amount of Valleys he's gone through
  return valleyCount;
};

console.log(upsAndDowns(n, s));
