import Header from "../Components/Header";
import DashboardItem from "../Components/DashboardItem";
import SideBar from "../Components/SideBar";
import DashboardChart from "../Graph/DashboardChart";

export default function DashBoardMain() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-screen">
        <SideBar CUclass={"hidden lg:block"}>Dashboard</SideBar>
        <div className="lg:bg-[#f5f5f5] lg:w-10/12">
          <div className="mt-3">
            <Header gclass={"mx-3 rounded indent-2"}>DashBoard</Header>
            <div className="flex justify-center items-center">
              <div className="lg:bg-[#a6a9ad] lg:h-[29rem] lg:w-[64.5rem] lg:mt-[1rem] rounded-[1rem] ">
                <DashboardItem />
                <div className="ml-6 mt-4">
                  <DashboardChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideBar CUclass={"mt-[45.5rem] lg:hidden"}>Dashboard</SideBar>
      </div>
    </>
  );
}
