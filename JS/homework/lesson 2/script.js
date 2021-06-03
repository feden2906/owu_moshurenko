// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let numArr = [5, 6, 98, 41, 2];
// let strArr = ['Yarik', 'mama', 'kia', 'lenovo', 'okten'];
// let newArr = ['Yarik', 'number', 5, 96, true];
// console.log(numArr);
// console.log(strArr);
// console.log(newArr);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
//
// const  newArr = [];
// newArr[2] = 'hello';
// newArr[7] = 'okten';
// newArr[5] = 5;
// newArr[0] = 'null';
// console.log(newArr)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div style="background-color: green">hello</div>`)
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div style="background-color: green"> ${i} hello</div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i < 20) {
//     i++;
//     document.write(`<h1>${i}</h1>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i < 20) {
//     i++;
//     document.write(`<h1>${i} hello</h1>`);
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let numArr = [1, 5, 89, 954, 52, 35, 34, 6, 4, 68];
// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i])
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let strArr = ['okten', 'it', 'student', 'yarik', 'sasha', 'mentor', 'logo', 'mama', 'kia', 'andriy'];
// for (let i = 0; i < strArr.length; i++) {
//     console.log(strArr[i])
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let newArr = ['okten', 'it', 'student', 'yarik', true, 654, 'logo', false, 67, 'andriy'];
// for (let i = 0; i < newArr.length; i++) {
//     if (typeof newArr[i] === "boolean")
//     console.log(newArr[i])
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let newArr = ['okten', 39, 'student', 'yarik', true, 654, 'logo', false, 67, 'andriy'];
// for (let i = 0; i < newArr.length; i++) {
//     if (typeof newArr[i] === "number")
//     console.log(newArr[i])
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let newArr = ['okten', 39, 'student', 'yarik', true, 654, 'logo', false, 67, 'andriy'];
// for (let i = 0; i < newArr.length; i++) {
//     if (typeof newArr[i] === "string")
//     console.log(newArr[i])
// }


// - Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// const  newArr = [];
// newArr[0] = 'hello';
// newArr[1] = 'okten';
// newArr[2] = 5;
// newArr[3] = 'null';
// newArr[4] = true;
// newArr[5] = 654;
// newArr[6] = 'mama';
// newArr[7] = false;
// newArr[8] = 'kuku';
// newArr[9] = 1235;
//
// for (let i = 0; i < newArr.length; i++) {
//     console.log(newArr[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++){
//     console.log(i)
//     document.write(`${i}`)
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++){
//     console.log(i)
//     document.write(`${i},`)
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++){
//     console.log(i)
//     document.write(`${i},`)
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i].id === citiesWithId[j].user_id) {
//             usersWithId[i].address = citiesWithId[j];
//             usersWithCities.push(usersWithId[i]);
//         }
//     }
// }
// console.log(usersWithCities);
