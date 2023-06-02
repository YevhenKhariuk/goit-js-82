// function calculateCompoundInterest(amount, months, interestRate) {
//   // Перевірка на правильність вхідних даних
//   if (amount <= 0 || months <= 0 || interestRate <= 0) {
//     return "Invalid input. Please provide positive values.";
//   }

//   // Розрахунок складного відсотку
//   const interest = amount * (Math.pow(1 + interestRate / 100, months) - 1);

//   // Округлення результату до двох знаків після коми
//   const compoundInterest = interest.toFixed(2);

//   return compoundInterest;
// }

// // Приклад використання функції
// const depositAmount = 100; // Кількість грошей
// const depositMonths = 12; // Кількість місяців
// const interestRate = 1.6; // Процент за місяць

// const result = calculateCompoundInterest(
//   depositAmount,
//   depositMonths,
//   interestRate
// );
// console.log(`Compound interest: $${result}`);
