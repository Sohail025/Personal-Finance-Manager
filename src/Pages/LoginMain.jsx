import Loginbtn from "../Components/Loginbtn";
import SideBar from "../Components/SideBar";
export default function LoginMain() {
  return (
    <>
      <SideBar>Login</SideBar>
      <main className="  bg-[#A29595] w-10/12 ">
        <div className="mt-3">
          <div className="flex justify-center items-center ">
            <div className="bg-[#D9D9D9] h-[32.7rem] w-[64.5rem] mt-[0.5rem] rounded flex justify-center items-center">
              <form className="space-y-4 bg-[#78b0a6] px-7 py-16 rounded">
                <div className="flex flex-col">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium py-2 text-[1.2rem]"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="px-3 py-2 w-96 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium py-2 text-[1.2rem]"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="px-3 py-2 w-96 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <Loginbtn>dashboard</Loginbtn>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
