export const SumCalc = (Array) => {
  const value =
    Array.length > 0
      ? Array.reduce((total, item) => {
          return (
            total +
            Number(
              item.inputIncomeValue
                ? item.inputIncomeValue
                : item.inputExpensesValue
            )
          );
        }, 0)
      : 0;
  return [value];
};
