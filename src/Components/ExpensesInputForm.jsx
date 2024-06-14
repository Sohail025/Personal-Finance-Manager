import { Context } from "../Contexts/ContextProvider";
export default function ExpensesInputForm() {
  const {
    inputExpensesLabel,
    inputExpensesValue,
    dispatch,
    expensesInputHanlder,
    itemExpense,
  } = Context();
  const totalExpense =
    itemExpense.length > 1
      ? itemExpense.reduce(
          (pre, curr) =>
            Number(pre.inputExpensesValue) + Number(curr.inputExpensesValue)
        )
      : itemExpense.length === 1
      ? itemExpense[0].inputExpensesValue
      : 0;
  return (
    <form className="flex flex-row justify-center gap-12 mt-5">
      <p className="bg-[#83A8A1] px-8 py-2 rounded">{`${totalExpense}$`}</p>
      <div className="flex gap-3">
        <input
          value={inputExpensesValue}
          onChange={(e) =>
            dispatch({ type: "inputExpensesValue", payload: e.target.value })
          }
          className="rounded"
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
          className="w-96 rounded"
          placeholder="Enter new Item"
          required
        ></input>
      </div>
      <button
        disabled={!(inputExpensesValue && inputExpensesValue)}
        onClick={expensesInputHanlder}
        className="bg-[#83A8A1] px-5 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
