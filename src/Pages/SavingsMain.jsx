import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SavingsItem from "../Components/SavingsItem";
import SavingsChart from "../Graph/SavingsChart";
export default function SavingsMain() {
  return (
    <>
      <SideBar CUclass={"hidden lg:block"}>Savings</SideBar>
      <main className="  lg:bg-[#A29595] lg:w-10/12">
        <div className="mt-3">
          <Header gclass={"mx-3 rounded indent-2 mt-3 lg:mt-0"}>Savings</Header>
          <div className="flex justify-center items-center mt-8 lg:mt-4">
            <div className="lg:bg-[#D9D9D9] lg:h-[29rem] lg:w-[64.5rem] rounded">
              <SavingsItem />
              <SavingsChart />
            </div>
          </div>
        </div>
      </main>
      <SideBar CUclass={"mt-[45.5rem] lg:hidden"}>Dashboard</SideBar>
    </>
  );
}
