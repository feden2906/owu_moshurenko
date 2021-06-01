// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt('Your name?');
// let surname = prompt('You surname?');
// let age = prompt('you age?')
// alert(`Welcome ${name} ${surname}. You are ${age} years old`)

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let num1 = parseInt(prompt());
// let num2 = parseInt(prompt());
// let num3 = parseInt(prompt());
// console.log(num1, num2, num3)

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою pareseInt. Додати їх всі мож собою і результат вивести в консоль.
// let num1 = parseInt(prompt());
// let num2 = parseInt(prompt());
// let num3 = parseInt(prompt());
// let num4 = parseInt(prompt());
// let res = (num1+num2+num3+num4);
// console.log(res);
// console.log(num1 + num2 + num3 + num4)

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let num1 = parseFloat(prompt());
// let num2 = parseFloat(prompt());
// let num3 = parseFloat(prompt());
// let result = (num1+num2+num3);
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let num1 = parseFloat(prompt());
// let num2 = parseFloat(prompt());
// let num3 = parseFloat(prompt());
// let res = Math.round(num1+num2+num3);
// console.log(res)

// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25
// let num1 = prompt();
// let num2 = prompt();
// console.log(Math.pow(num1, num2));

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
// let a = 23;
// let b = 10;
// let s = a *  b;
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let hC = 10;
// let dC = 4;
// let v = 3.14*hC*dC;
// console.log(v);

// Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Who';
// let str2 = 'are';
// let str3 = 'you?';
// let concat = (str1 +' '+ str2 +' '+ str3);
// console.log(concat);

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let a = parseInt(prompt());
// let b = parseInt(prompt());
// let c = parseInt(prompt());
// if (a > b && b > c) {
//     console.log(c, b, a);
// } else if (a > c && c > b) {
//     console.log(b, c, a)
// } else if (b > c && c > a) {
//     console.log(a, c, b)
// } else if (c > a && a > b) {
//     console.log(b, a, c)
// } else if (c > b && b > a) {
//     console.log(a, b, c)
// }

// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt('enter color')
// switch (color) {
// case 'green':
//     console.log('go');
//     break;
// case 'yellow':
//     console.log('wait');
//     break;
// case 'red':
//     console.log('stop');
//     break;
// default:
//     console.log('fgdfdssdfdhgfsgd');
// }
