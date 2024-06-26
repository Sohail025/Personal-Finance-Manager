import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { Context } from "../Contexts/ContextProvider";
export default function DashBoardMain() {
  return (
    <div className="flex flex-col lg:flex-row w-screen">
      <SideBar CUclass={"hidden lg:block"}>Dashboard</SideBar>
      <div className="  lg:bg-[#A29595] lg:w-10/12">
        <div className="mt-3">
          <Header gclass={"mx-3 rounded indent-2"}>DashBoard</Header>
          <div className="flex justify-center items-center ">
            <div className="lg:bg-[#D9D9D9] lg:h-[29rem] lg:w-[64.5rem] lg:mt-[1rem] rounded">
              <Item />
            </div>
          </div>
        </div>
      </div>
      <SideBar CUclass={"mt-[45.5rem] lg:hidden"}>Dashboard</SideBar>
    </div>
  );
}
function Item() {
  const { totalIncome, totalExpense, totalSavings } = Context();
  return (
    <div className="flex lg:flex-row flex-col justify-center lg:mt-8 lg:gap-20 lg:mx-6 gap-10 mt-10">
      <div className="bg-[#6E8BAD] lg:h-[7.5rem] lg:w-[15rem] rounded w-[23.5rem] h-[10rem] sm:w-[35rem] sm:h-[15rem]">
        <h2 className="lg:ml-2 lg:mt-2">Income</h2>
        <p className="lg:text-[1rem] lg:ml-20 lg:mb-10">{`${
          totalIncome ? totalIncome : 0
        }$`}</p>
      </div>
      <div className="bg-[#6E8BAD] lg:h-[7.5rem] lg:w-[15rem] rounded w-[23.5rem] h-[10rem] sm:w-[35rem] sm:h-[15rem]">
        <h2 className="lg:ml-2 lg:mt-2">Savings</h2>
        <p className="lg:text-[1rem] lg:ml-20 lg:mb-10">{`${
          totalSavings ? totalSavings : 0
        }$`}</p>
      </div>
      <div className="bg-[#6E8BAD] lg:h-[7.5rem] lg:w-[15rem] rounded w-[23.5rem] h-[10rem] sm:w-[35rem] sm:h-[15rem]">
        <h2 className="lg:ml-2 lg:mt-2">Expenses</h2>
        <p className="lg:text-[1rem] lg:lg:ml-20 lg:lg:mb-10">{`${
          totalExpense ? totalExpense : 0
        }$`}</p>
      </div>
    </div>
  );
}
