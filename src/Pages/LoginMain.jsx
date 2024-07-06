import LoginForm from "../Components/LoginForm";
import SideBar from "../Components/SideBar";
export default function Home() {
  return (
    <>
      <SideBar CUclass={"hidden lg:block"} />
      <div className="lg:h-screen lg:w-screen lg:bg-gradient-to-br lg:from-[#acb3b8] lg:to-[#273748] flex justify-center items-center">
        <div className="rounded-[0.5rem] flex flex-col items-center lg:h-[28rem] lg:w-[59rem] lg:shadow-smlg:items-end lg:justify-end lg:flex-row">
          <div className="flex justify-center items-center lg:bg-[#fcc] lg:w-6/12 lg:h-full lg:rounded-tl-[1rem] lg:rounded-bl-[1rem] ">
            <div className="mt-32 lg:mt-0">
              <h1 className="text-[2rem] font-bold mb-4">Welcome to Hasil</h1>
              <ol className="lg:text-[1.2rem] sm:text-[1.8rem] font-medium font-[Jost] text-[#403d3d] ">
                <li>1. Add Your Income In the Income Page.</li>
                <li>2. Add Your Expenses In the Expenses Page.</li>
                <li>3. Track Your Savings on Monthly Basis.</li>
              </ol>
            </div>
          </div>
          <div className="lg:w-3/6 lg:h-full lg:bg-[#4dc4a8] lg:flex lg:justify-center lg:items-center lg:rounded-tr-[1rem] lg:rounded-br-[1rem] sm:mr-14">
            <LoginForm />
          </div>
        </div>
      </div>
      <SideBar gclass={"mt-[45.5rem] lg:hidden"} />
    </>
  );
}
