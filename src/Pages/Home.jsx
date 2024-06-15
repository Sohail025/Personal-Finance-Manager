import Loginbtn from "../Components/Loginbtn";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <>
      <SideBar />
      <div className="h-screen w-screen bg-gradient-to-br from-[#acb3b8] to-[#273748] flex justify-center items-center">
        <div className="h-[28rem] w-[59rem] bg-gradient-to-br from-[#ccffaa] to-[#53bdaf] rounded-[0.5rem] shadow-sm flex justify-center items-center">
          <div>
            <ol className="text-[1.2rem] font-medium font-[Jost] text-[#403d3d]">
              <li>1. Add Your Income In the Income Page.</li>
              <li>2. Add Your Expenses In the Expenses Page.</li>
              <li>3. Track Your Savings on Monthly Basis.</li>
            </ol>
            <div className="flex justify-center items-center mt-5 mr-7">
              <Loginbtn>login</Loginbtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
