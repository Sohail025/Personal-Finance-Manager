import { Context } from "../Contexts/ContextProvider";
export default function InputForm({ header }) {
  const {
    dispatch,
    inputExpensesLabel,
    inputExpensesValue,
    inputIncomeLabel,
    inputIncomeValue,
    expensesInputHanlder,
    incomeInputHanlder,
    totalExpense,
    totalIncome,
    fakeDataStatus,
    fakeIncome,
    fakeExpense,
  } = Context();
  const isExpenses = Boolean(header === "Expenses");
  return (
    <form className="flex flex-row justify-center lg:gap-12 lg:mt-5 gap-4 mt-8">
      <p className="bg-[#e9545d] text-[#fff] font-bold lg:px-8 lg:py-2 rounded px-2 sm:px-4 text-center sm:pt-2">{`${
        !fakeDataStatus
          ? isExpenses
            ? fakeExpense
            : fakeIncome
          : isExpenses
          ? totalExpense
          : totalIncome
      }$`}</p>
      <div className="flex lg:gap-3 gap-4">
        <input
          value={isExpenses ? inputExpensesValue : inputIncomeValue}
          onChange={(e) =>
            dispatch(
              isExpenses
                ? e.target.value >= 0
                  ? { type: "inputExpensesValue", payload: e.target.value }
                  : 0
                : e.target.value >= 0
                ? { type: "inputIncomeValue", payload: e.target.value }
                : 0
            )
          }
          className="rounded-[0.6rem] w-10 text-center bg-[#eaeeed] outline-none"
          placeholder="$"
          type="Number"
          required
        ></input>
        <input
          value={isExpenses ? inputExpensesLabel : inputIncomeLabel}
          onChange={(e) =>
            dispatch(
              isExpenses
                ? { type: "inputExpensesLabel", payload: e.target.value }
                : { type: "inputIncomeLabel", payload: e.target.value }
            )
          }
          type="text"
          className="lg:w-96 rounded-[1rem] indent-2 sm:w-80 sm:h-10 outline-none bg-[#eaeeed]"
          placeholder="Enter new Item"
          required
        ></input>
      </div>
      <button
        disabled={
          isExpenses
            ? !(inputExpensesValue && inputExpensesValue)
            : !(inputIncomeValue && inputIncomeValue)
        }
        onClick={isExpenses ? expensesInputHanlder : incomeInputHanlder}
        className="bg-[#e9545d] text-[#fff] font-bold lg:px-5 lg:py-2 rounded px-1.5 text-[0.7rem] sm:px-5 sm:text-[1rem]"
      >
        Submit
      </button>
    </form>
  );
}
