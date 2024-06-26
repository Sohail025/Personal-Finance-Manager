import IncomeInputForm from "../Components/IncomeInputForm";
import Header from "../Components/Header";
import { Context } from "../Contexts/ContextProvider";
import SideBar from "../Components/SideBar";
export default function IncomeMain() {
  return (
    <>
      <SideBar CUclass={"hidden lg:block"}>Income</SideBar>
      <main className="  lg:bg-[#A29595] lg:w-10/12">
        <div className="mt-3">
          <Header gclass={"mx-3 rounded indent-2 mt-3 lg:mt-0"}>Income</Header>
          <div className="flex justify-center items-center ">
            <div className="lg:bg-[#D9D9D9] lg:h-[29rem] lg:w-[64.5rem] lg:mt-[1rem] rounded mt-4">
              <IncomeInputForm />
              <div className="lg:overflow-y-auto lg:h-[24.2rem] lg:overflow-hidden lg:no-scrollbar">
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
  const { incomeStreem } = Context();
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 sm:grid-cols-2 place-items-center lg:mt-12 mt-7 gap-10 ">
      {incomeStreem.map((item) => (
        <SingleItem item={item} key={item.key} />
      ))}
    </div>
  );
}
function SingleItem({ item }) {
  return (
    <div className="bg-[#6E8BAD] lg:h-[12rem] lg:w-[26rem] rounded w-80 h-36 sm:w-72">
      <h2 className="lg:ml-2 lg:mt-2">{item.inputIncomeLabel}</h2>
      <p className="lg:text-[7rem] lg:ml-20 lg:mb-10">{`${item.inputIncomeValue}$`}</p>
    </div>
  );
}
