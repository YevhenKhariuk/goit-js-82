// const apple = 47;
// const grapes = 135;
// const total = apple + grapes;
// const diff = grapes - apple;
// console.log(total);
// console.log(diff);

// let students = 100;
// students += 50;
// console.log(students);

// console.log(Math.random() * (10 - 1) + 1);

// const value = 27.9;
// console.log("original", value);
// console.log("floor", Math.floor(value));
// console.log("ceil", Math.ceil(value));
// console.log("round", Math.round(value));

// const companyName = "Cyberdyne Systems";
// const repairBots = 160;
// const defenceBots = 0;
// const message = `${companyName} has ${repairBots + defenceBots}`;
// console.log(message);

// Знаходження індексу масии тіла та округдення до одного знаку після коми

// let weight = "88,3";
// let height = "1.75";
// weight = weight.replace(",", ".");
// const bmi = weight / Math.pow(height, 2);
// console.log(bmi.toFixed(1));

// let incomingValue = 0;
// const defaultValue = 10;
// const value1 = incomingValue || defaultValue;
// const value2 = incomingValue ?? defaultValue;
// console.log("value1", value1);
// console.log("value2", value2);

// скрипт який переводить хвилини в години

// const totalMinutes = 70;
// console.log("totalMinutes", totalMinutes);
// let hours = Math.floor(totalMinutes / 60);
// console.log("hours", hours);
// let minutes = totalMinutes % 60;
// console.log("minutes", minutes);

// let hoursFormatted = hours.toString().padStart(2, "0");
// let minutesFormatted = minutes.toString().padStart(2, "0");

// let result = `${hoursFormatted}:${minutesFormatted}`;
// console.log(result);

// let ansver = prompt("Яка офіційна назва JS?");
// if (ansver === "ECMAscript") {
//   alert("Правильно");
// } else {
//   ("Не знаєте? ECMAscript!");
// }

// const hours = 14;
// const minutes = 26;
// let timestring;

// timestring = `${hours} г.`;
// if (minutes > 0) {
//   timestring += ` ${minutes} хв.`;
// }

// console.log(timestring);

// const userInput = prompt("Введіть число");
// const number = Number(userInput);

// if (isNaN(number)) {
//   console.log("Введене значення не є числом");
// } else if (number > 0) {
//   console.log("Це позитивне число");
// } else if (number < 0) {
//   console.log("Це негативне число");
// } else {
//   console.log("Це нуль");
// }

// let a = 120;
// let b = 99;

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log("a is max", a);
//   } else if (b > a) {
//     console.log("b is max", b);
//   } else {
//     console.log("a and b are equals", a);
//   }
// } else {
//   console.log(b + 512);
// }

// let a = 120;
// let b = 105;

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// let link = "https://example.com/";
// if (link.endsWith("/")) {
//   console.log(link);
// } else {
//   link += "/";
//   console.log(link);
// }

// let link = "https://example.com/";
// if (!link.endsWith("/")) {
//   link += "/";
// }
// console.log(link);

// let link = "https://example.com/";
// if ((!link.endsWith("/")) && link.includes("my-site")) {
//   link += "/";
//   console.log("fixed");
// }
// console.log(link);

// let link = "https://example.com/";
// let isNeedToFixUrl = !link.endsWith("/") && link.includes("my-site");
// link += isNeedToFixUrl ? "/" : "";
// console.log(link);

// const hours = 10;
// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// let hours = 14;
// if (hours < 17) {
//   console.log("Pending");
// } else if (hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Дата у майбутньому");
// }

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;
//   default:
//     console.log("Дата у майбутньому");
//     break;
// }

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// const login = prompt("Введіть ваш логін:");
// let message;

// if (login === "бандерівець2023") {
//   const password = prompt("Гасло?!");
//   if (password === "Слава Україні") {
//     message = "Героям Слава!";
//   } else if (password === null || password === "") {
//     message = "Скасовано";
//   } else {
//     message = "Вийди розбійник!";
//   }
// } else if (login === null || login === "") {
//   message = "Скасовано";
// } else {
//   message = "Ви хто такі? я вас не кликав!";
// }

// console.log(message);

// const login = prompt("Введіть логін");

// if (!login) {
//   console.log("Скасовано");
// } else if (login === "бандерівець2023") {
//   const password = prompt("Гасло?!");
//   if (password === "Слава Україні") {
//     console.log("Героям Слава!");
//   } else {
//     console.log("Вийди розбійник!");
//   }
// } else {
//   console.log("Ви хто такі? Я вас не кликав!");
// }
