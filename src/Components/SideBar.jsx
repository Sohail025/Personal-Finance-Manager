import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

export default function SideBar({ gclass }) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-20 z-10 bg-[#D9D9D9] lg:w-2/12 lg:h-screen lg:relative sm:mt-[50rem] lg:mt-0 ${gclass} `}
    >
      <div className=" hidden lg:block ml-14">
        <Link to={"/"}>
          <img
            className="lg:ml-1"
            src="https://img.icons8.com/stickers/100/bank-card-dollar.png"
            alt="bank-card-dollar"
          />
        </Link>
      </div>
      <div className="flex lg:gap-2 lg:flex-col lg:justify-center flex-row lg:mt-12 items-center justify-evenly w-screen lg:w-full">
        <SidebarItem>Dashboard</SidebarItem>
        <SidebarItem>Income</SidebarItem>
        <SidebarItem>Savings</SidebarItem>
        <SidebarItem>Expenses</SidebarItem>
        <Link
          className="hidden lg:block bg-[#e9545d] mt-10 px-7 py-2 rounded-lg text-white font-bold"
          to={"/login"}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
