// 1
// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// 2
// function getNamesByGrade(students, grade) {
//   return students
//     .map((student) => {
//       if (student.percent > 60 && student.percent < 70) {
//         return { ...student, grade: 3 };
//       } else if (student.percent > 60 && student.percent < 70) {
//         return { ...student, grade: 4 };
//       } else {
//         return { ...students, grade: 5 };
//       }
//     })
//     .filter(
//       ((student) => student.grade == grade).map((student) => student.name)
//     );
// }
// const result = getNamesByGrade(students, 5);
// console.log(result);

// 3
// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const result = animals.reduce((acc, curVal) => {
//   if (acc[curVal]) {
//     acc[curVal] = acc[curVal] + 1;
//   } else {
//     acc[curVal] = 1;
//   }
//   return acc;
// }, {});
// console.log(result);

// 4
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((num) => num ** 2);
// console.log(result);

// 5
// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const result = numbers
//   .filter((num) => num > 0)
//   .reduce((acc, curVal) => (acc += curVal));
// console.log(result);

// 6
// const text = "George Raymond Richard Martin";

// const result = text
//   .split(" ")
//   .map((item) => item[0])
//   .join("");
// console.log(result);

// 7
// const ages = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// const result = ages.sort((a, b) => a.ages - b.ages);
// console.log(result[0]);
// console.log(result.at(-1));

// 8
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const toq = nums.filter((el) => el % 2 == 1);
// const juft = nums.filter((el) => el % 2 == 0);
// console.log(toq, juft);

// 9
// const products = [
//   { id: 3, name: "Shoes", price: 120, rating: 4.2, discount: 10 },
// ];

// const idsort = products.sort((a, b) => a.id - b.id);
// console.log(idsort);

// const names = products.sort((c, d) => c.name - d.name);
// console.log(names);

// const prices = products.sort((a, b) => a.price - b.price);
// console.log(prices);

// const raiting = products.sort((a, b) => a.rating - b.rating);
// console.log(raiting);

// const discount = products.sort((a, b) => a.discount - b.discount);
// console.log(discount);

// 10

// 11
// const products = [
//   { name: "Apple - Macbook - Pro", price: 2000 },
//   { name: "Acer - Extenca", price: 750 },
//   { name: "Apple - Macbook - Air", price: 1500 },
//   { name: "Acer - Victus", price: 800 },
// ];

// products.sort((a, b) => a.price - b.price);

// const orzoni = products[0];

// console.log("Eng arzoni - ", orzoni);

// 12
// const products = [
//   { name: "Apple - Macbook - Pro", price: 2000 },
//   { name: "Acer - Extenca", price: 750 },
//   { name: "Apple - Macbook - Air", price: 1500 },
//   { name: "Acer - Victus", price: 800 },
// ];

// const allPrice = products.reduce((acc, curVal) => acc + curVal.price, 0);

// console.log("Hamma noutbooklar narxi - ", allPrice);

// 13
// const products = [
//   { name: "Apple - Macbook - Pro", price: 2000 },
//   { name: "Acer - Extenca", price: 750 },
//   { name: "Apple - Macbook - Air", price: 1500 },
//   { name: "Acer - Victus", price: 800 },
// ];

// const value = products.map((product) => product.name);

// console.log(value);

// 14
// const products = [
//   { id: 1, name: "Lenovo - IdealPad", price: 500 },
//   { id: 2, name: "Acer - Extenca", price: 750 },
//   { id: 3, name: "Apple - Macbook - Air", price: 1500 },
//   { id: 4, name: "Acer - Victus", price: 800 },
//   { id: 5, name: "Apple - Macbook - Pro", price: 2000 },
// ];

// const ids = products.find((item) => item.id === 5);

// console.log(ids);

// 15
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const value = products.filter((items) => items.id != 4);

// console.log(value);

// 16
// const text = "Georgie Raymond ?Richard Martin";

// const result = text.split("").every((el) => {
//   if (!Number(el.trim())) {
//     return true;
//   }
// });
// console.log(result);

// 17
// const text = "Georgie Raymond Richard Martin";
// const result = text
//   .split(" ")
//   .join("")
//   .split("")
//   .every((el) => {
//     const string = new String(el).charCodeAt();
//     if ((string >= 65 && string <= 90) || (string >= 97 && string <= 122)) {
//       return true;
//     }
//   });
// console.log(result);

// 18
// function num(arr) {
//   const trueValues = arr.filter((item) => item);
//   const falseValues = arr.filter((item) => !item);

//   return {
//     true: trueValues,
//     false: falseValues,
//   };
// }

// console.log(num([false, 1, 10, "", null, "abdulaziz", 1.13, 0]));

// 18
// const words = "Men MuhammadNurulloh Web Programmerman";

// function wordsnum() {
//   return words.split(" ").map((word) => word.length);
// }
// console.log(wordsnum());

// 19
// const text = "Georgie Raymond Richard Martin";

// const tabs = text.split("");
// function tab() {
//   if ((tabs.length = " ")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(tab());

// 20
// const obj = { a: 2, b: 5, c: 7 };

// const value = Object.entries(obj).map(([key, value]) => key + value);

// console.log(value);

// 21
