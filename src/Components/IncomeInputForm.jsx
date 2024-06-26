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
    <form className="flex flex-row justify-center lg:gap-12 gap-4 lg:mt-5 py-2 px-3">
      <p className="bg-[#83A8A1] lg:px-8 lg:py-2 rounded px-2 sm:px-4 text-center sm:pt-2">{`${totalIncome}$`}</p>
      <div className="flex lg:gap-3 gap-4">
        <input
          value={inputIncomeValue}
          onChange={(e) =>
            dispatch({ type: "inputIncomeValue", payload: e.target.value })
          }
          className="rounded w-10 border-[#000000] border-[0.1rem] text-center"
          placeholder="$"
          type="Number"
          required
        ></input>
        <input
          value={inputIncomeLabel}
          onChange={(e) =>
            dispatch({ type: "inputIncomeLabel", payload: e.target.value })
          }
          type="text"
          className="lg:w-96 rounded border-[#000000] border-[0.1rem] indent-2 sm:w-80 sm:h-10"
          placeholder="New Income Streem"
          required
        ></input>
      </div>
      <button
        disabled={!(inputIncomeValue && inputIncomeValue)}
        onClick={incomeInputHanlder}
        className="bg-[#83A8A1] lg:px-5 lg:py-2 rounded px-1.5 text-[0.7rem] sm:text-[1rem] sm:px-5"
      >
        Submit
      </button>
    </form>
  );
}
