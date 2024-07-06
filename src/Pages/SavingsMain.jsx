import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SavingsItem from "../Components/SavingsItem";
import SavingsChart from "../Graph/SavingsChart";
export default function SavingsMain() {
  return (
    <>
      <SideBar CUclass={"hidden lg:block"}>Savings</SideBar>
      <main className="  lg:bg-[#f5f5f5] lg:w-10/12 ">
        <div className="mt-3">
          <Header gclass={"mx-3 rounded indent-2 mt-3 lg:mt-0"}>Savings</Header>
          <div className="lg:bg-[#c4cccd] lg:h-[29rem] lg:w-[64.5rem] rounded shadow-lg gap-10 mt-5 sm:mx-6 flex-col items-end">
            <SavingsItem />
            <SavingsChart />
          </div>
        </div>
      </main>
      <SideBar gclass={"mt-[45.5rem] lg:hidden"}>Dashboard</SideBar>
    </>
  );
}
