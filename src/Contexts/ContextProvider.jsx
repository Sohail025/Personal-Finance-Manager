import { useContext, useReducer } from "react";
import { createContext } from "react";
import { NavLink } from "react-router-dom";
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
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  const totalIncome =
    incomeStreem.length > 1
      ? incomeStreem.reduce(
          (pre, curr) =>
            Number(pre.inputIncomeValue) + Number(curr.inputIncomeValue)
        )
      : incomeStreem.length === 1
      ? incomeStreem[0].inputIncomeValue
      : 0;
  const totalExpense =
    itemExpense.length > 1
      ? itemExpense.reduce(
          (pre, curr) =>
            Number(pre.inputExpensesValue) + Number(curr.inputExpensesValue)
        )
      : itemExpense.length === 1
      ? itemExpense[0].inputExpensesValue
      : 0;
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  const totalSavings = totalIncome - totalExpense;
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
  //////////////////////////////////////////////////
  // nav Links
  // nav Links
  //////////////////////////////////////////////////

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
