import Header from "../Components/Header";
import DashboardItem from "../Components/DashboardItem";
import SideBar from "../Components/SideBar";
import DashboardChart from "../Graph/DashboardChart";

export default function DashBoardMain() {
  return (
    <>
      <SideBar gclass={"hidden lg:block"} />
      <div className="lg:bg-[#f5f5f5] lg:w-10/12 lg:block mt-3">
        <Header>DashBoard</Header>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full lg:bg-[#a6a9ad] lg:mt-[1rem] rounded-[1rem] lg:mx-4">
            <DashboardItem />
            <DashboardChart />
          </div>
        </div>
      </div>
      <SideBar gclass={"mt-[45.5rem] lg:hidden"}>Dashboard</SideBar>
    </>
  );
}
