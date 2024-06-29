export default function SingleItem({ singleItem }) {
  return (
    <div className="bg-[#171b3d] text-[#fff] h-[5rem] w-[10rem] rounded shadow-sm">
      <h2 className="ml-2 mt-2 text-[0.7rem]">
        {singleItem.inputExpensesLabel
          ? singleItem.inputExpensesLabel
          : singleItem.inputIncomeLabel}
      </h2>
      <p className="text-center font-bold text-[2rem]">{`${Number(
        singleItem.inputExpensesValue
          ? singleItem.inputExpensesValue
          : singleItem.inputIncomeValue
      )}$`}</p>
    </div>
  );
}
