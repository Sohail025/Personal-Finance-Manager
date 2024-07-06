import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { set, get } from "idb-keyval";
import { reducer } from "./Reducer";
import { SumCalc } from "../Hooks/SumCalc";
import { ChartArray } from "../Hooks/ChartArray";
import {
  startingValues,
  thisMonth,
  incomeStorageKey,
  expenseStorageKey,
  historyDataKey,
  Labels,
} from "./Variables";
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
      historyData,
    },
    dispatch,
  ] = useReducer(reducer, startingValues);

  const [totalIncome] = SumCalc(incomeStreem);
  const [totalExpense] = SumCalc(itemExpense);
  const totalSavings = totalIncome - totalExpense;
  const newHistoryItemStatus =
    historyData.length > 0
      ? Boolean(historyData.find((item) => item.thisMonth === thisMonth))
      : false;
  ///////////////////////////////////////////////////
  const totalIncomeArray = historyData.map((item) => item.totalIncome);
  const totalExpenseArray = historyData.map((item) => item.totalExpense);
  const totalSavingsArray = historyData.map(
    (item) => item.totalIncome - item.totalExpense
  );
  const currMonth = Labels.findIndex(
    (item) => item === historyData[0]?.thisMonth
  );
  const [zeroArrary] = ChartArray(currMonth);
  const incomeArray = [...zeroArrary, ...totalIncomeArray];
  const expenseArray = [...zeroArrary, ...totalExpenseArray];
  const savingsArray = [...zeroArrary, ...totalSavingsArray];

  const dataGetter = async () => {
    const incomeData = await get(incomeStorageKey);
    const expensesData = await get(expenseStorageKey);
    const storedHistoryData = await get(historyDataKey);
    if (incomeData)
      dispatch({ type: "getInocmeFromStorage", payload: incomeData });
    if (expensesData)
      dispatch({ type: "getExpensesFromStorage", payload: expensesData });
    if (storedHistoryData)
      dispatch({ type: "FirsthistoryData", payload: storedHistoryData });
  };
  useEffect(() => {
    dataGetter();
  }, []);
  const UpdateCurrMonthValues = () => {
    const currMonthData = historyData.find(
      (item) => item.thisMonth === thisMonth
    );
    if (currMonthData) {
      currMonthData.totalIncome = totalIncome + Number(inputIncomeValue);
      currMonthData.totalExpense = totalExpense + Number(inputExpensesValue);
    }
    set(historyDataKey, [...historyData]);
  };
  const ValuesResseter = () => {
    set(historyDataKey, []);
    set(incomeStorageKey, []);
    set(expenseStorageKey, []);
  };
  // ValuesResseter();
  const HistorydataSetter = () => {
    if (!newHistoryItemStatus) {
      dispatch({
        type: "historyData",
        payload: {
          thisMonth,
          totalIncome: totalIncome + Number(inputIncomeValue),
          totalExpense: totalExpense + Number(inputExpensesValue),
        },
      });
    }
    const finaltotalInocme = totalIncome + Number(inputIncomeValue);
    console.log(totalIncome + Number(inputIncomeValue));
    set(historyDataKey, [
      ...historyData,
      {
        thisMonth,
        totalIncome: finaltotalInocme,
        totalExpense: totalExpense + Number(inputExpensesValue),
      },
    ]);
  };
  function incomeInputHanlder(e) {
    e.preventDefault();
    dispatch({
      type: "incomeInputHanlder",
      payload: {
        inputIncomeLabel,
        inputIncomeValue,
        key: crypto.randomUUID(),
      },
    });
    set(incomeStorageKey, [
      ...incomeStreem,
      { inputIncomeLabel, inputIncomeValue },
    ]);
    HistorydataSetter();
    UpdateCurrMonthValues();
  }
  function expensesInputHanlder(e) {
    e.preventDefault();
    dispatch({
      type: "expensesInputHanlder",
      payload: {
        inputExpensesLabel,
        inputExpensesValue,
        key: crypto.randomUUID(),
      },
    });
    set(expenseStorageKey, [
      ...itemExpense,
      { inputExpensesLabel, inputExpensesValue },
    ]);
    HistorydataSetter();
    UpdateCurrMonthValues();
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
        incomeArray,
        expenseArray,
        savingsArray,
        FakeDataHandler,
        fakeDataStatus,
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
