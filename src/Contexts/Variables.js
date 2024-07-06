export const fakeIncomeStreem = [
  { inputIncomeLabel: "Sallery", inputIncomeValue: 500 },
  { inputIncomeLabel: "Rent of House 1", inputIncomeValue: 500 },
  { inputIncomeLabel: "Rent of House 2", inputIncomeValue: 1000 },
  { inputIncomeLabel: "Rent of House 3", inputIncomeValue: 1000 },
  { inputIncomeLabel: "Rent of Shop", inputIncomeValue: 1000 },
];
export const fakeExpenseStreem = [
  { inputIncomeLabel: "Grocery", inputIncomeValue: 200 },
  { inputIncomeLabel: "College Fee", inputIncomeValue: 300 },
  { inputIncomeLabel: "Clothes", inputIncomeValue: 200 },
  { inputIncomeLabel: "Party", inputIncomeValue: 500 },
  { inputIncomeLabel: "Travel", inputIncomeValue: 500 },
];
export const fakeDashboardData = [
  {
    data: [0, 3000, 3200, 3600, 4000],
  },
  {
    data: [0, 1000, 1100, 1800, 2300],
  },
  {
    data: [0, 2000, 2100, 1800, 1700],
  },
];
export const startingValues = {
  inputIncomeLabel: "",
  inputIncomeValue: 0,
  inputExpensesLabel: "",
  inputExpensesValue: 0,
  incomeStreem: [],
  itemExpense: [],
  fakeDataStatus: true,
  historyData: [],
};
export const Labels = [
  0,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const fakeIncome = 4000;
export const fakeExpense = 1700;
export const fakeSavings = 6200;
export const fakeSavingsData = [0, 1000, 2100, 3900, 6200];
export const thisMonth = new Date().toLocaleString("en-US", { month: "long" });
export const incomeStorageKey = `${thisMonth} Income`;
export const expenseStorageKey = `${thisMonth} Expense`;
export const historyDataKey = "HistoryDataKey";
