//TODO: Example 2: Write a JavaScript function to merge two arrays and removes all duplicates elements if any
const array1 = [1, 2, 3];
const array2 = [2, 30, 1];

const mergeArray = (array1, array2) => {
  const array = array1.concat(array2);
  let resultArray = [...new Set(array)];

  return resultArray;
};

console.log("merge_array : ", mergeArray(array1, array2));

//TODO: Example 3: Write a JavaScript function to remove a specific element from an array
const removeArrayElement = (array, n) => {
  // console.log(array);
  // console.log(n);

  let index = array.indexOf(n);

  if (index > -1) {
    array.splice(index, 1);
  }

  return array;
};

console.log("remove_array_element : ", removeArrayElement([2, 5, 9, 6], 5));

//TODO: Example 4 :  Write a JavaScript function to find an array contains a specific element
let arr = [2, 5, 9, 6];
const contains = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
};
console.log("contains : ", contains(arr, 5));

//TODO: Example 1 :
// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array
const last = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];

  return array.splice(Math.max(array.length - n, 0));
};

console.log("Last : ", last([7, 9, 0, -2]));
console.log("Last : ", last([7, 9, 0, -2], 3));
console.log("Last : ", last([7, 9, 0, -2], 6));
console.log("LastEspecially : ", last([]));

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
const first = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];

  return array.splice(0, n);
};

console.log("first : ", first([7, 9, 0, -2]));
console.log("first : ", first([], 3));
console.log("first : ", first([7, 9, 0, -2], 3));
console.log("first : ", first([7, 9, 0, -2], 6));
console.log("first : ", first([7, 9, 0, -2], -3));

//TODO: Example 5 : Write a JavaScript function to sort the following array of objects by title value
let library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

const compareSort = (x, y) => {
  // console.log("x : ", x.title);
  // console.log("y : ", y.title);

  if (x.title < y.title) return -1;
  if (x.title > y.title) return 1;

  return 0;
};
console.log("library : ", library.sort(compareSort));

//TODO: Example 6 : Write a JavaScript function return new array only include names that length more than 2 or includes more than 2 words

let items = [
  { name: "Edward Edward Edward", value: 21 },
  { name: "Sharpe Edward", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

const newArray = (array) => {
  // console.log("items : ", array);
  let result = array.filter((item) => {
    if (item.name.length >= 12) {
      // ??o???n n??y em l??m theo c??ch n??y c??i qu?? m?? em ch??a ngh?? ra c?? c??ch n??o kh??c kh??ng ????

      // ??o???n n??y em c?? ngh?? ?????n 1 case l?? : n???u name c?? 2 t??? m?? ????? d??i n?? ch??? b???ng 1 t??? th??i,th?? c??ch tr??n em l?? b??? failed ngay.
      return item;
    }
  });

  return result;
};

console.log("result : ", newArray(items));

// Summary : M???y ??o???n tr??n em c?? tham kh???o qua th?? em hi???u ?????y c?? m???i b??i 5 em ch??a hi???u d?? l???m l?? ??o???n x.title > y.title vs x.title < y.title
// todo : em c?? tham kh???o qua m?? em v???n n???m d?? b???n ch???t l???m : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
