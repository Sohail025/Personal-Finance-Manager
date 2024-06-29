import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { get, set } from "idb-keyval";

const fakeIncomeStreem = [
  { inputIncomeLabel: "Sallery", inputIncomeValue: 500 },
  { inputIncomeLabel: "Rent of House 1", inputIncomeValue: 500 },
  { inputIncomeLabel: "Rent of House 2", inputIncomeValue: 1000 },
  { inputIncomeLabel: "Rent of House 3", inputIncomeValue: 1000 },
  { inputIncomeLabel: "Rent of Shop", inputIncomeValue: 1000 },
];
const fakeExpenseStreem = [
  { inputIncomeLabel: "Grocery", inputIncomeValue: 200 },
  { inputIncomeLabel: "College Fee", inputIncomeValue: 300 },
  { inputIncomeLabel: "Clothes", inputIncomeValue: 200 },
  { inputIncomeLabel: "Party", inputIncomeValue: 500 },
  { inputIncomeLabel: "Travel", inputIncomeValue: 500 },
];
const startingValues = {
  inputIncomeLabel: "",
  inputIncomeValue: 0,
  inputExpensesLabel: "",
  inputExpensesValue: 0,
  incomeStreem: [],
  itemExpense: [],
  fakeDataStatus: true,
  HistoryData: [],
};
function reducer(state, action) {
  switch (action.type) {
    ///////////////////////////////
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
    /////////////////////////////////
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
        incomeStreem: [...state.incomeStreem, action.payload1],
        inputIncomeLabel: "",
        inputIncomeValue: 0,
        HistoryData: [{ Monthlyincome: action.payload2 }],
      };
    case "expensesInputHanlder":
      return {
        ...state,
        itemExpense: [...state.itemExpense, action.payload1],
        inputExpensesLabel: "",
        inputExpensesValue: 0,
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
    default:
      return state;
  }
}
const postContext = createContext();
function ContextProvider({ children }) {
  const [
    {
      inputIncomeLabel,
      inputIncomeValue,
      inputExpensesLabel,
      inputExpensesValue,
      incomeStreem,
      itemExpense,
      fakeDataStatus,
    },
    dispatch,
  ] = useReducer(reducer, startingValues);
  useEffect(() => {
    const dataGetter = async () => {
      const incomeData = await get("income");
      const expensesData = await get("expenses");
      if (incomeData)
        dispatch({ type: "getInocmeFromStorage", payload: incomeData });
      if (expensesData)
        dispatch({ type: "getExpensesFromStorage", payload: expensesData });
    };
    dataGetter();
  }, []);
  ///////////////////////////////////////////////////////////////////////////////////
  const totalIncome =
    incomeStreem.length > 0
      ? incomeStreem.reduce((total, item) => {
          return total + Number(item.inputIncomeValue);
        }, 0)
      : 0;
  const totalExpense =
    itemExpense.length > 0
      ? itemExpense.reduce((total, item) => {
          return total + Number(item.inputExpensesValue);
        }, 0)
      : 0;
  const totalSavings = totalIncome - totalExpense;
  const fakeIncome = 4000;
  const fakeExpense = 1700;
  const fakeSavings = 6200;
  const thisMonth = new Date().toLocaleString("en-US", { month: "long" });
  const thisYear = new Date().getFullYear();
  function incomeInputHanlder(e) {
    e.preventDefault();
    dispatch({
      type: "incomeInputHanlder",
      payload: {
        inputIncomeLabel,
        inputIncomeValue,
        key: crypto.randomUUID(),
      },
      payload2: { totalIncome },
    });
    set("income", [...incomeStreem, { inputIncomeLabel, inputIncomeValue }]);
  }
  function expensesInputHanlder(e) {
    e.preventDefault();
    dispatch({
      type: "expensesInputHanlder",
      payload1: {
        inputExpensesLabel,
        inputExpensesValue,
        key: crypto.randomUUID(),
      },
      payload2: { totalExpense },
    });
    set("expenses", [
      ...itemExpense,
      { inputExpensesLabel, inputExpensesValue, thisMonth, thisYear },
    ]);
  }
  const FakeDataHandler = () => {
    dispatch({ type: "clearFakeData" });
  };
  return (
    <postContext.Provider
      value={{
        dispatch,
        inputIncomeLabel,
        inputIncomeValue,
        incomeInputHanlder,
        inputExpensesLabel,
        inputExpensesValue,
        expensesInputHanlder,
        incomeStreem,
        itemExpense,
        totalIncome,
        totalExpense,
        totalSavings,
        thisMonth,
        thisYear,
        fakeIncomeStreem,
        fakeExpenseStreem,
        FakeDataHandler,
        fakeDataStatus,
        fakeIncome,
        fakeExpense,
        fakeSavings,
      }}
    >
      {children}
    </postContext.Provider>
  );
}
function Context() {
  return useContext(postContext);
}
export { ContextProvider, Context };
