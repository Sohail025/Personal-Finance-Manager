import { Context } from "../Contexts/ContextProvider";

export default function SingleItem({ singleItem }) {
  const { itemRemoveHandler } = Context();
  return (
    <div className="bg-[#171b3d] text-[#fff] h-[5rem] w-full rounded shadow-sm">
      <div className="flex justify-between mx-2 pt-2">
        <h2 className=" text-[0.7rem] h-4">
          {singleItem.inputExpensesLabel
            ? singleItem.inputExpensesLabel
            : singleItem.inputIncomeLabel}
        </h2>
        <button
          onClick={itemRemoveHandler}
          className="h-4 bg-[#fcc] w-4 rounded hidden"
        >
          *
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
