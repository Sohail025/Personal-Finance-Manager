import Loginbtn from "../Components/Loginbtn";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <>
      <SideBar CUclass={"hidden lg:block"} />
      <div className="lg:h-screen lg:w-screen lg:bg-gradient-to-br lg:from-[#acb3b8] lg:to-[#273748] flex justify-center items-center">
        <div className="lg:h-[28rem] w-screen h-screen lg:w-[59rem] bg-gradient-to-br from-[#ccffaa] to-[#53bdaf] rounded-[0.5rem] lg:shadow-sm flex justify-center items-center">
          <div>
            <ol className="lg:text-[1.2rem] sm:text-[1.8rem] font-medium font-[Jost] text-[#403d3d]">
              <li>1. Add Your Income In the Income Page.</li>
              <li>2. Add Your Expenses In the Expenses Page.</li>
              <li>3. Track Your Savings on Monthly Basis.</li>
            </ol>
            <div className="flex justify-center items-center lg:mt-5 lg:mr-7">
              <Loginbtn>login</Loginbtn>
            </div>
          </div>
        </div>
      </div>
      <SideBar CUclass={"mt-[45.5rem] lg:hidden"} />
    </>
  );
}
