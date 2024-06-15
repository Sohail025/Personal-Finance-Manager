import { Context } from "../Contexts/ContextProvider";
export default function IncomeInputForm() {
  const {
    inputIncomeLabel,
    inputIncomeValue,
    dispatch,
    incomeInputHanlder,
    totalIncome,
  } = Context();

  return (
    <form className="flex flex-row justify-center gap-12 mt-5">
      <p className="bg-[#83A8A1] px-8 py-2 rounded">{`${totalIncome}$`}</p>
      <div className="flex gap-3">
        <input
          value={inputIncomeValue}
          onChange={(e) =>
            dispatch({ type: "inputIncomeValue", payload: e.target.value })
          }
          className="rounded"
          placeholder="Value $"
          type="Number"
          required
        ></input>
        <input
          value={inputIncomeLabel}
          onChange={(e) =>
            dispatch({ type: "inputIncomeLabel", payload: e.target.value })
          }
          type="text"
          className="w-96 rounded"
          placeholder="Enter The New Income Streem"
          required
        ></input>
      </div>
      <button
        disabled={!(inputIncomeValue && inputIncomeValue)}
        onClick={incomeInputHanlder}
        className="bg-[#83A8A1] px-5 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
