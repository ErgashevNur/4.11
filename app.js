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
