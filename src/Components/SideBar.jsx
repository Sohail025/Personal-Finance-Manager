import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="  bg-[#D9D9D9] w-2/12 h-screen">
      <div className="img ml-[3.5rem] flex flex-col gap-7 justify-center">
        <Link to={"/"}>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/stickers/100/bank-card-dollar.png"
            alt="bank-card-dollar"
          />
        </Link>
      </div>
      <div className="flex gap-7 flex-col mt-12 items-center justify-center">
        <Link
          to={"/Dashboard"}
          className="bg-[#5c8462] py-3 rounded w-40 text-center"
        >
          Dashboard
        </Link>
        <Link
          to={"/Income"}
          className="bg-[#5c8462] py-3 rounded w-40 text-center"
        >
          Income
        </Link>
        <Link
          to={"/Expenses"}
          className="bg-[#5c8462] py-3 rounded w-40 text-center"
        >
          Expenses
        </Link>
        <Link
          to={"/Savings"}
          className="bg-[#5c8462] rounded py-3 w-40 text-center"
        >
          Savings
        </Link>
        <div className="mt-[2rem] py-3 w-28 bg-[#3852a1]  rounded-[2rem] text-center text-[#ffff]">
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
