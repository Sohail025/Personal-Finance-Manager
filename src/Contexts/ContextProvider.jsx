import { useContext, useReducer } from "react";
import { createContext } from "react";
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
  function incomeInputHanlder(e) {
    e.preventDefault();
    dispatch({
      type: "incomeInputHanlder",
      payload: { inputIncomeLabel, inputIncomeValue, key: crypto.randomUUID() },
    });
    dispatch({ type: "clearSearchField" });
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
