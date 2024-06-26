import { Context } from "../Contexts/ContextProvider";
export default function ExpensesInputForm() {
  const {
    inputExpensesLabel,
    inputExpensesValue,
    dispatch,
    expensesInputHanlder,
    totalExpense,
  } = Context();
  return (
    <form className="flex flex-row justify-center lg:gap-12 lg:mt-5 gap-4 mt-8">
      <p className="bg-[#83A8A1] lg:px-8 lg:py-2 rounded px-2 sm:px-4 text-center sm:pt-2">{`${totalExpense}$`}</p>
      <div className="flex lg:gap-3 gap-4">
        <input
          value={inputExpensesValue}
          onChange={(e) =>
            dispatch({ type: "inputExpensesValue", payload: e.target.value })
          }
          className="rounded w-10 border-[#000000] border-[0.1rem] text-center"
          placeholder="Value $"
          type="number"
          required
        ></input>
        <input
          value={inputExpensesLabel}
          onChange={(e) =>
            dispatch({ type: "inputExpensesLabel", payload: e.target.value })
          }
          type="text"
          className="lg:w-96 rounded border-[#000000] border-[0.1rem] indent-2 sm:w-80 sm:h-10"
          placeholder="Enter new Item"
          required
        ></input>
      </div>
      <button
        disabled={!(inputExpensesValue && inputExpensesValue)}
        onClick={expensesInputHanlder}
        className="bg-[#83A8A1] lg:px-5 lg:py-2 rounded px-1.5 text-[0.7rem] sm:px-5 sm:text-[1rem]"
      >
        Submit
      </button>
    </form>
  );
}
