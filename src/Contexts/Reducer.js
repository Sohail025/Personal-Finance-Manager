export function reducer(state, action) {
  switch (action.type) {
    case "inputIncomeValue":
      return {
        ...state,
        inputIncomeValue: action.payload,
      };
    case "inputIncomeLabel":
      return {
        ...state,
        inputIncomeLabel: action.payload,
      };
    case "inputExpensesValue":
      return {
        ...state,
        inputExpensesValue: action.payload,
      };
    case "inputExpensesLabel":
      return {
        ...state,
        inputExpensesLabel: action.payload,
      };
    case "incomeInputHanlder":
      return {
        ...state,
        incomeStreem: [...state.incomeStreem, action.payload],
        inputIncomeLabel: "",
        inputIncomeValue: 0,
      };
    case "expensesInputHanlder":
      return {
        ...state,
        itemExpense: [...state.itemExpense, action.payload],
        inputExpensesLabel: "",
        inputExpensesValue: 0,
      };
    case "filteredData":
      return {
        ...state,
        incomeStreem: action.payload1,
        itemExpense: action.payload2,
      };
    case "getInocmeFromStorage":
      return {
        ...state,
        incomeStreem: action.payload,
      };
    case "getExpensesFromStorage":
      return {
        ...state,
        itemExpense: action.payload,
      };
    case "clearFakeData":
      return {
        ...state,
        fakeDataStatus: false,
      };
    case "historyData":
      return {
        ...state,
        historyData: [...state.historyData, action.payload],
      };
    case "FirsthistoryData":
      return {
        ...state,
        historyData: [...action.payload],
      };
    default:
      return state;
  }
}
