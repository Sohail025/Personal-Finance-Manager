import IncomeExpenseContainer from "../Components/IncomeExpenseContainer";
import { Context } from "../Contexts/ContextProvider";
export default function ExpensesMain() {
  const { fakeExpenseStreem, fakeDataStatus, itemExpense } = Context();
  return (
    <IncomeExpenseContainer header={"Expenses"}>
      {!fakeDataStatus ? fakeExpenseStreem : itemExpense}
    </IncomeExpenseContainer>
  );
}
