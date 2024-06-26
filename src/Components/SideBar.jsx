import { Link } from "react-router-dom";

export default function SideBar({ CUclass }) {
  return (
    <div
      className={`  bg-[#D9D9D9] lg:w-2/12 lg:h-screen w-screen h-1/6 ${CUclass} pl-10 fixed lg:relative sm:mt-[50rem] lg:mt-0`}
    >
      <div className="lg:ml-[1rem] lg:flex lg:flex-col lg:gap-7 lg:justify-center hidden">
        <Link to={"/"}>
          <img
            className="lg:ml-1"
            src="https://img.icons8.com/stickers/100/bank-card-dollar.png"
            alt="bank-card-dollar"
          />
        </Link>
      </div>
      <div className="flex lg:gap-2 lg:flex-col lg:justify-center flex-row lg:mt-12 items-center justify-center gap-7 lg:mr-10">
        <Link
          to={"/Dashboard"}
          className="bg-[#5c8462] lg:py-3 rounded lg:w-40 px-[0.2rem] py-[0.1rem] text-[1rem] mt-5 text-center sm:text-[1.5rem] sm:px-2 lg:text-[1rem]"
        >
          Dashboard
        </Link>
        <Link
          to={"/Income"}
          className="bg-[#5c8462] lg:py-3 rounded lg:w-40 px-[0.2rem] py-[0.1rem] text-[1rem] mt-5 text-center sm:text-[1.5rem] sm:px-2 lg:text-[1rem]"
        >
          Income
        </Link>
        <Link
          to={"/Expenses"}
          className="bg-[#5c8462] lg:py-3 rounded lg:w-40 px-[0.2rem] py-[0.1rem] text-[1rem] mt-5 text-center sm:text-[1.5rem] sm:px-2 lg:text-[1rem]"
        >
          Expenses
        </Link>
        <Link
          to={"/Savings"}
          className="bg-[#5c8462] rounded lg:py-3 lg:w-40 px-[0.2rem] py-[0.1rem] text-[1rem] mt-5 text-center sm:text-[1.5rem] sm:px-2 lg:text-[1rem]"
        >
          Savings
        </Link>
        <div className="lg:mt-[2rem] lg:py-3 lg:w-28 bg-[#3852a1]  rounded-[2rem] text-center text-[#ffff] lg:text-[1rem]">
          <Link className="hidden lg:block" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
