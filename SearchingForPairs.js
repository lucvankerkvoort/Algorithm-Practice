// Given 2 arrays, create a function that
// lets a user know (true/false) whether
// these two arrays contain ay common items
// For example
// const array 1 = ['a','b', 'c', 'x']
// const array 2 = ['z','y','i']
// should return false.
// --------------------
// const array 1 = ['a','b', 'c', 'x']
// const array 2 = ['z','y','x']
// should return true

// Brute force approach

// what we want to do here is find if any of the indexes of the first array appear in the second array
// that means we can check this by looping through the first array and saying for each of these indexes if they appear in the second array

const array1 = ['a','b', 'c', 'x']
const array2 = ['z','y','x']


const doesArrayHavePairs = (array1, array2) => {
  array1.forEach( letter => {
    if(array2.indexOf(letter) !== -1){ // meaning that one of the letters of array1 is inside array2 
      console.log(true);
    }
  })
  return false;
}

doesArrayHavePairs(array1, array2)

// This brute force approach has  a time complexity of O(n^2) because we are using a nested loop by using .indexOf.
// .indexOf is an array prototype with a build in for loop and therefore not an optimum performer for this function.

// I would rather use objects because for searching (which we are doing here), objects have a time complexity of O(1).
// We would still need to use 2 for loops only this time around they won't be nested.

const doesArrayHavePairs2 = (array1, array2) => {
  const map = {}

  for(let i = 0; i < array1.length; i++){
    if(!map[array1[i]]){
      const item = array1[i];
      map[item] = true;
    }
  } 

  for(let j = 0; j < array2.length; j++){
    if(map[array2[j]]){
      return console.log(true);
    }
  }
  return console.log(false);
}

doesArrayHavePairs2(array1, array2)

// This function has a time complexity of O(n) and a space complexity of O(n) so it is a Linear Time function

function doesArrayHavePairs3 = (array1, array2) => {
  array1.some( item => array2.includes(item))
}
};

doesArrayHavePairs3(array1, array2)
