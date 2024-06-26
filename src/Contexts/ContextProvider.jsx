import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { get, set } from "idb-keyval";
const startingValues = {
  inputIncomeLabel: "",
  inputIncomeValue: 0,
  inputExpensesLabel: "",
  inputExpensesValue: 0,
  incomeStreem: [],
  itemExpense: [],
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
  console.log(totalExpense);
  const totalSavings = totalIncome - totalExpense;
  ///////////////////////////////////////////////////////////
  function incomeInputHanlder(e) {
    e.preventDefault();

    dispatch({
      type: "incomeInputHanlder",
      payload: { inputIncomeLabel, inputIncomeValue, key: crypto.randomUUID() },
    });
    set("income", [...incomeStreem, { inputIncomeLabel, inputIncomeValue }]);
  }
  function expensesInputHanlder(e) {
    e.preventDefault();
    dispatch({
      type: "expensesInputHanlder",
      payload: { inputExpensesLabel, inputExpensesValue },
    });
  }
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
