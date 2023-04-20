// 1) Створіть змінну str і дайте їй значення 'abcde',
// звертаючись до окремих символів цього рядка, виведіть на екран a, b, c, e.

// const str = "abcde";
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[str.length - 1]);

// 2) Напишіть інструкцію, яка приймає рядок, як аргумент і перетворює
//  регістр першого символу рядка з нижнього регістру у верхній.

// const str = "string not starting with capital";
// console.log(str[0].toUpperCase() + str.slice(1));

// 3) Переробіть наведений код так, що бу ньому використовувались операції +=,
// -=, *=, /=, ++, --.
// Кількість рядків коду не повинна змінитися. Код для переробки:
// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;

// 4) Ви проситк користувача ввести суму його зарплати. Потім розраховуєту:

// Добавку у вигляді премії у сумі 15% від зарплати.
// Податки у сумі 10% від всіх нарахувань (зарплата + премія).
// Витрату в магазині в сумі 190.
// Розділяєте суму, що залишилась, між користувачем і його "дружиною"/"чоловіком".

// Виводьте скільки залишилось в результаті всіх операцій грошей у користувач

// let salary = +prompt("Яка у тебе ЗП?");
// console.log(typeof salary);
// salary = Math.floor((salary *= 1.15));
// console.log("Зп з премією складає:" + salary);
// salary = Math.floor((salary *= 0.9));
// console.log("Зп з відрахуванням складає:" + salary);
// salary = Math.floor(salary - 190);
// console.log("Зп після витрат складає:" + salary);
// salary = Math.floor((salary *= 0.5));
// console.log("Зп після відрахувань в сімейеий бюджет складає:" + salary);

// 5) Написати фразу за допомогою конкатинації та шаблонних рядків
// "Hello, my name is (name), I'm (age) years old and I like (nobody)", де квадратних дужках змінні

// const name = "Dan";
// const age = 35;
// const hobby = "swimming";

// const message = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`;
// console.log(message);

// const message =
//   "Hello, my name is " +
//   name +
//   " I'm " +
//   age +
//   " years old and I like " +
//   hobby;
// console.log(message);

// 6) Створіть функцію endsWith(), яка порівнюж підрядок str1 із закінченням вихідного рядка
// str і визначає чи закінчується рядок символом підрядка.

// const str = "Кожен мисливець бажає знати";
// const str1 = "скрипт";
// const str2 = "знати";

// function endsWith(str, substring) {
//   return str.endsWith(substring);
// }

// console.log(endsWith(str, str1));
// console.log(endsWith(str, str2));

// const str = "Кожен мисливець бажає знати";
// const str1 = "скрипт";
// const str2 = "знати";

// function endsWith(str, substring) {
//   return str.includes(substring, -substring.length);
// }

// console.log(endsWith(str, str1));
// console.log(endsWith(str, str2));

// 7) Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою
// циклу for, hile, do...while. У результаті має вийти 55.

// for
// let result = 0;
// for (let i = 0; i <= 10; i += 1) {
//   result += i;
// }

// console.log(result);

// while
// let i = 0;
// let result = 0;
// while (i <= 10) {
//   result += i;
//   i += 1;
// }
// console.log(result);

// do...while
// let result = 0;
// let i = 0;
// do {
//   result += i;
//   i++;
// } while (i <= 10);
// console.log(result);
