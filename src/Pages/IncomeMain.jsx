import IncomeExpenseContainer from "../Components/IncomeExpenseContainer";
import { Context } from "../Contexts/ContextProvider";
export default function IncomeMain() {
  const { fakeIncomeStreem, fakeDataStatus, incomeStreem } = Context();
  return (
    <IncomeExpenseContainer header={"Income"}>
      {!fakeDataStatus ? fakeIncomeStreem : incomeStreem}
    </IncomeExpenseContainer>
  );
}
