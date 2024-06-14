import IncomeInputForm from "../Components/IncomeInputForm";
import Header from "../Components/Header";
import { Context } from "../Contexts/ContextProvider";
export default function IncomeMain() {
  return (
    <main className="  bg-[#A29595] w-10/12 ">
      <div className="mt-3">
        <Header>Income</Header>
        <div className="flex justify-center items-center ">
          <div className="bg-[#D9D9D9] h-[29rem] w-[64.5rem] mt-[1rem] rounded">
            <IncomeInputForm />
            <Item />
          </div>
        </div>
      </div>
    </main>
  );
}
function Item() {
  const { incomeStreem } = Context();
  return (
    <div className="grid grid-cols-2 place-items-center mt-12">
      {incomeStreem.map((item) => (
        <SingalItem item={item} key={item.key} />
      ))}
    </div>
  );
}
function SingalItem({ item }) {
  return (
    <div className="bg-[#6E8BAD] h-[12rem] w-[26rem] rounded">
      <h2 className="ml-2 mt-2">{item.inputIncomeLabel}</h2>
      <p className="text-[7rem] ml-20 mb-10">{`${item.inputIncomeValue}$`}</p>
    </div>
  );
}
