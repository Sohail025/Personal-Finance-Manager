import SideBar from "./SideBar";
import Header from "./Header";
import Item from "./Item";
import InputForm from "./InputForm";
export default function IncomeExpenseContainer({ children, header }) {
  return (
    <>
      <SideBar CUclass={"hidden lg:block"} />
      <main className="  lg:bg-[#f5f5f5] lg:w-10/12 lg:block">
        <div className="mt-3">
          <Header gclass={"mx-3 rounded indent-2 mt-3 lg:mt-0"}>
            {header}
          </Header>
          <div className="flex justify-center items-center ">
            <div className="lg:bg-[#a9b4aa] lg:h-[29rem] lg:w-[64.5rem] lg:mt-[1rem] rounded-[1rem] shadow-lg ">
              <InputForm header={header} />
              <div className="lg:overflow-y-auto lg:h-[24.18rem] lg:overflow-hidden lg:no-scrollbar lg:mt-0">
                <Item item={children} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SideBar CUclass={"mt-[45.5rem] lg:hidden"}>Dashboard</SideBar>
    </>
  );
}
