import Header from "../Components/Header";

import ExpensesInputForm from "../Components/ExpensesInputForm";
import { Context } from "../Contexts/ContextProvider";
import SideBar from "../Components/SideBar";
export default function ExpensesMain() {
  return (
    <>
      <SideBar CUclass={"hidden lg:block"}>Expenses</SideBar>
      <main className="  lg:bg-[#A29595] lg:w-10/12 lg:block">
        <div className="mt-3">
          <Header gclass={"mx-3 rounded indent-2 mt-3 lg:mt-0"}>
            Expenses
          </Header>
          <div className="flex justify-center items-center ">
            <div className="lg:bg-[#D9D9D9] lg:h-[29rem] lg:w-[64.5rem] lg:mt-[1rem] rounded">
              <ExpensesInputForm />
              <div className="lg:overflow-y-auto lg:h-[24.18rem] lg:overflow-hidden lg:no-scrollbar lg:mt-4">
                <Item />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SideBar CUclass={"mt-[45.5rem] lg:hidden"}>Dashboard</SideBar>
    </>
  );
}
function Item() {
  const { itemExpense } = Context();
  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 place-items-center mt-12 gap-5 sm:gap-9 mx-6 lg:mt-6">
      {itemExpense.map((item) => (
        <SingalItem item={item} key={item.inputExpensesLabel} />
      ))}
    </div>
  );
}
function SingalItem({ item }) {
  return (
    <div className="bg-[#6E8BAD] h-[5rem] w-[10rem] rounded">
      <h2 className="ml-2 mt-2">{item.inputExpensesLabel}</h2>
      <p className="text-[1rem] ml-20 mb-10">{`${Number(
        item.inputExpensesValue
      )}$`}</p>
    </div>
  );
}
