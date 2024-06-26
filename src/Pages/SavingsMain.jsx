import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { Context } from "../Contexts/ContextProvider";
export default function SavingsMain() {
  return (
    <>
      <SideBar CUclass={"hidden lg:block"}>Savings</SideBar>
      <main className="  lg:bg-[#A29595] lg:w-10/12">
        <div className="mt-3">
          <Header gclass={"mx-3 rounded indent-2 mt-3 lg:mt-0"}>Savings</Header>
          <div className="flex justify-center items-center mt-8 lg:mt-4">
            <div className="lg:bg-[#D9D9D9] lg:h-[29rem] lg:w-[64.5rem] rounded">
              <Item />
            </div>
          </div>
        </div>
      </main>
      <SideBar CUclass={"mt-[45.5rem] lg:hidden"}>Dashboard</SideBar>
    </>
  );
}
function Item() {
  const { totalSavings } = Context();
  return (
    <div className="flex flex-row justify-end lg:gap-5 gap-10 lg:mt-5 lg:mr-4">
      <div className="bg-[#6E8BAD] lg:h-[10rem] lg:w-[20rem] rounded w-[9rem] sm:w-64 sm:h-28">
        <h2 className="lg:ml-2 lg:mt-2">Total Savings</h2>
        <p className="lg:text-[1rem] lg:ml-20 lg:mb-10">
          {totalSavings ? totalSavings : 0}
        </p>
      </div>
      <div
        className="bg-[#6E8BAD] lg:h-[10rem] lg:w-[20rem] rounded w-[9rem] h-20 sm:w-64 sm:h-28
      "
      >
        <h2 className="lg:ml-2 lg:mt-2">Assets Value</h2>
        <p className="lg:text-[1rem] lg:ml-20 lg:mb-10">450$</p>
      </div>
    </div>
  );
}
