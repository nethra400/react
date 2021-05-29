//arrays
var arr = [];
for (var i = 0; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

//Includes
const idArray = [1, 2, 8, 6, 4];
console.log(idArray.includes(2, 1));
console.log(idArray.includes(10));
console.log(idArray.includes(6));
console.log(idArray.includes(34));
console.log(idArray.includes(1, 2));

//Removing array elements using splice method
const array1 = [21, 23, 45, 32, 18];
console.log("initial array " + array1);

array1.splice(2, 2, 9, 7);
console.log(array1);

const array2 = ["a", "b", "c", "d"];
console.log(array2);
array2.splice(0, 3, 1, 2, 3, 4);
console.log(array2);

//concat and slice method
const arr1 = [11, 12, 13, 14];
const arr2 = [15, 16, 17, 18];
const newArr = arr1.concat(arr2);
console.log(newArr);

const sliceArr = newArr.slice(0, 2);
console.log(sliceArr);
const arr3 = sliceArr.concat(arr1);
console.log(arr3);

//counting the occurence of array element

const countOccurrences = (array, value) =>
  array.reduce((a, v) => (v === value ? a + 1 : a), 0);

const count = countOccurrences([2, 1, 3, 3, 2, 3], 1);
const count1 = countOccurrences(["a", "b", "a", "c", "a", "b"], "a");
console.log(count);
console.log(count);

//Get max value of an array

var arr = [1, 2, 3, 10];
var max = arr.reduce(function (a, b) {
  return Math.max(a, b);
});
console.log(max);

//

const numbers = [
  {
    title: "a",
    year: 2018,
    rating: 4.5,
  },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];
