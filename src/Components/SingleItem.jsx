import { Context } from "../Contexts/ContextProvider";

export default function SingleItem({ singleItem }) {
  const { itemRemoveHandler } = Context();
  return (
    <div className="bg-[#171b3d] text-[#fff] h-[5rem] w-full rounded shadow-sm group">
      <div className="flex justify-between mx-2 pt-2">
        <h2 className=" text-[0.7rem] h-4">
          {singleItem.inputExpensesLabel
            ? singleItem.inputExpensesLabel
            : singleItem.inputIncomeLabel}
        </h2>
        <button
          onClick={() => itemRemoveHandler(singleItem.id)}
          className="h-5 w-5 rounded opacity-0 group-hover:opacity-100"
        >
          <img src="cross.png" alt="" />
        </button>
      </div>

      <p className="text-center font-bold text-[2rem]">{`${Number(
        singleItem.inputExpensesValue
          ? singleItem.inputExpensesValue
          : singleItem.inputIncomeValue
      )}$`}</p>
    </div>
  );
}
