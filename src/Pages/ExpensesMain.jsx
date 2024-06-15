import Header from "../Components/Header";

import ExpensesInputForm from "../Components/ExpensesInputForm";
import { Context } from "../Contexts/ContextProvider";
import SideBar from "../Components/SideBar";
export default function ExpensesMain() {
  return (
    <>
      <SideBar>Expenses</SideBar>
      <main className="  bg-[#A29595] w-10/12 ">
        <div className="mt-3">
          <Header>Expenses</Header>
          <div className="flex justify-center items-center ">
            <div className="bg-[#D9D9D9] h-[29rem] w-[64.5rem] mt-[1rem] rounded">
              <ExpensesInputForm />
              <Item />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
function Item() {
  const { itemExpense } = Context();
  return (
    <div className="grid grid-cols-5 place-items-center mt-12 gap-5 mx-6">
      {itemExpense.map((item) => (
        <SingalItem item={item} key={item.key} />
      ))}
    </div>
  );
}
function SingalItem({ item }) {
  return (
    <div className="bg-[#6E8BAD] h-[5rem] w-[10rem] rounded">
      <h2 className="ml-2 mt-2">{item.inputExpensesLabel}</h2>
      <p className="text-[1rem] ml-20 mb-10">{`${item.inputExpensesValue}$`}</p>
    </div>
  );
}
