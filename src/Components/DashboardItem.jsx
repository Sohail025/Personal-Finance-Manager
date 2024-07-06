import { Context } from "../Contexts/ContextProvider";
import { fakeIncome, fakeExpense, fakeSavings } from "../Contexts/Variables";
import DashboardSingleItem from "./DashboardSingleItem";
export default function DashboardItem() {
  const { totalIncome, totalExpense, totalSavings, fakeDataStatus } = Context();
  return (
    <div className="flex w-screen lg:flex-row flex-col  justify-center lg:mt-8 lg:gap-20 lg:mx-6 gap-10 mt-10 px-2 sm:px-5 lg:w-fit">
      <DashboardSingleItem name={"Income"}>{`${
        !fakeDataStatus ? fakeIncome : totalIncome ? totalIncome : 0
      }$`}</DashboardSingleItem>
      <DashboardSingleItem name={"Savings"}>{`${
        !fakeDataStatus ? fakeSavings : totalSavings ? totalSavings : 0
      }$`}</DashboardSingleItem>
      <DashboardSingleItem name={"Expenses"}>{`${
        !fakeDataStatus ? fakeExpense : totalExpense ? totalExpense : 0
      }$`}</DashboardSingleItem>
    </div>
  );
}
