import Loginbtn from "../Components/Loginbtn";
import SideBar from "../Components/SideBar";
export default function LoginMain() {
  return (
    <div className="flex flex-col lg:flex-row w-screen">
      <SideBar CUclass={"hidden lg:block mt-10d"} />

      <main className="  lg:bg-[#A29595] w-10/12 ">
        <div className="lg:mt-3">
          <div className="flex justify-center items-center ">
            <div className="lg:bg-[#D9D9D9] lg:h-[32.7rem] lg:w-[64.5rem] w-[60rem] lg:mt-[0.5rem] rounded flex justify-center items-center">
              <form className="space-y-4 bg-[#78b0a6] px-7 py-16 rounded ml-5 mr-5 my-5 h-[43.4rem] sm:h-screen w-screen sm:mx-0 sm:my-0 lg:w-96 lg:h-80 ">
                <div className="flex flex-col">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium py-2 text-[1.2rem] sm:text-[1.5rem] lg:text-[1rem] lg:py-2"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="lg:px-3 lg:py-2 lg:w-72 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent sm:h-10 indent-1 lg:h-7"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium lg:py-2 lg:text-[1rem] sm:text-[1.5rem] mb-2 "
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="lg:px-3 lg:py-2 lg:w-72 w-[18.8rem] sm:w-full sm:h-10 indent-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent lg:h-7"
                  />
                </div>
                <br></br>
                <Loginbtn>dashboard</Loginbtn>
              </form>
            </div>
          </div>
        </div>
        <SideBar CUclass={"lg:hidden"} />
      </main>
    </div>
  );
}
