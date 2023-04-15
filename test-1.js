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
