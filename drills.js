/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-console */
// 5- URL-ify a string
function createStringURL(string) {
  const arr = string.split(''); 

  
  const setArr = arr.map(item => {
    if (item === ' ') {
      return item = '%20';
    }
    return item;
  });

  return setArr.join(''); 
}

console.log(createStringURL('bilbo baggins'));
console.log(createStringURL('bi l b o ba gg ins'));

// 6- Filtering an array
function filterArray(arr, value) {
  let newArr = [];

  arr.forEach(item => {
    if (item > value) {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(filterArray([1, 2, 7, 8, 4, 6], 5));

// 7- Max sum array
function maxSum(arr) {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    sum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

// 8- Merge arrays
function mergeArray(arr1, arr2) {
  const newArr = Array.from(arr1);

  arr2.forEach((num) => {
    let i = 0;

    while (i < newArr.length) {
      if (num <= newArr[i]) {
        newArr.splice(i, 0, num);
        break;
      }
      i++;
    }
  });

  return newArr;
}

console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//9- Remove characters
function removeCharacters(string, letters) {
  let finalString = '';
  let arrFilter = [];

  for (let i = 0; i < letters.length; i++) {
    arrFilter.push(letters[i]);
  }

  for (let j = 0; j < string.length; j++) {
    if (!arrFilter.includes(string[j].toLowerCase())) {
      finalString += string[j];
    }
  }
  return finalString;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Gronzy', 'aeiou'));

// 10- Products
function getProduct(arr) {
  const arrProduct = arr.map((num, i) => {
    const otherNums = arr.slice(0, i).concat(arr.slice((i + 1), (arr.length)));
    return otherNums.reduce((acc, curr) => acc * curr);
  });

  return arrProduct;
}

console.log(getProduct([1, 3, 9, 4]));

// 11- 2D Array
function get2D(arr) {
  const firstArr = JSON.parse(JSON.stringify(arr));
  let newArr = arr;

  firstArr.map((row, rowAlt) => {
    row.map((item, arrAlt) => {
      if (item === 0) {
        newArr[rowAlt].forEach((num, i) => newArr[rowAlt][i] = 0);
        newArr.forEach(newRow => newRow[arrAlt] = 0);
      }
    });
  });
  return newArr;
}

console.log
(get2D
([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]
));

// 12- String Rotation
function stringRotate(string1, string2) {
  if (!string1 || !string2) {
    return false;
  }
  if (string1.length !== string2.length) {
    return false; 
  }
  return (string1 + string1).includes(string2);
}

console.log(stringRotate('amazon', 'azonma')); 
console.log(stringRotate('amazon', 'azonam'));