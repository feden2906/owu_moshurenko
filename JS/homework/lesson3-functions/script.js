// 1) створити функцію яка приймає масив та виводить його
//
// let array = [12, 26, 32, 45, 60]
//
// function myFunction(date) {
//     for (let i = 0; i < date.length; i++) {
//         console.log(date[i]);
//     }
// }


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
//
// function myArray() {
//     let date = [];
//     for (let i = 0; i < 5; i++) {
//         date[i] = Math.random()
//     }
//     myFunction(date);
// }
//
// myArray();

// // 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
//  function sortNum(a, b, c) {
//      if (a > b && b > c) {
//          console.log(c);
//      } else if (a > c && c > b) {
//          console.log(b)
//      } else if (b > c && c > a) {
//          console.log(a)
//      } else if (c > a && a > b) {
//          console.log(b)
//      } else if (c > b && b > a) {
//          console.log(a)
//      } else if (b > a && a > c) {
//          console.log(c)
//      }
//  }
//
// sortNum(3,2,1);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
//  function sortNum(a, b, c) {
//      if (a > b && b > c) {
//          console.log(a);
//      } else if (a > c && c > b) {
//          console.log(a)
//      } else if (b > c && c > a) {
//          console.log(b)
//      } else if (c > a && a > b) {
//          console.log(c)
//      } else if (c > b && b > a) {
//          console.log(c)
//      } else if (b > a && a > c) {
//          console.log(b)
//      }
//  }
//
// sortNum(1,3,2);


// // 5) створити функцію яка повертає найбільше число з масиву
//
// function bigNum (array) {
//     let max = array[0];
//         for (const element of array) {
//         if (max < element) max = element;
//     } return max;
// }
// let maxNum = bigNum([1, 23, 54, 987, 65, 31, 48, 64]);
// console.log(maxNum)


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//
// function sumArray(array) {
//     let sum = 0;
//     for (const element of array) {
//         sum += element;
//     }
//     return sum;
// }
// total = sumArray([1, 2, 3, 4])
// console.log(total)


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function sumArray(array) {
//     let sum = 0;
//     for (const element of array) {
//         sum += element                                // TODO ділити в циклі на довжину не логічне рішення
//     }
//     return sum / array.length;
// }
// total = sumArray([1, 2, 3, 4])
// console.log(total)


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// function keys (array) {
//     let arrKeys = [];
//     for (const arrKey of array) {
//         for (const keyElement in arrKey) {
//             console.log(keyElement)
//             arrKeys.push(keyElement);
//         }
//     } return arrKeys
// }
//
// let key = keys([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(key);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function keys (array) {
//     let arrKeys = [];
//     for (const arrKey of array) {
//         for (const keyElement in arrKey) {
//             arrKeys.push(arrKey[keyElement]);
//         }
//     } return arrKeys
// }
// let value = keys([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(value);
