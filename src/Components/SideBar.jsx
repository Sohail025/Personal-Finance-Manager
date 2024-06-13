export default function SideBar() {
  return (
    <div className="  bg-[#D9D9D9] w-2/12 h-screen">
      <ul className="flex flex-col gap-7 ml-5 ">
        <div className="img ml-[2.2rem]">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/stickers/100/bank-card-dollar.png"
            alt="bank-card-dollar"
          />
        </div>
        <div className="flex gap-7 flex-col mt-7">
          <button className=" bg-[#5c8462] py-3 rounded mr-5">Dashboard</button>
          <button className=" bg-[#5c8462] py-3 rounded mr-5">Income</button>
          <button className=" bg-[#5c8462] py-3 rounded mr-5">Expenses</button>
          <button className=" bg-[#5c8462] py-3 rounded mr-5">Savings</button>
        </div>

        <div>
          <button className="ml-[1.5rem] mt-[2rem] bg-[#5c8462] px-10 py-3 rounded">
            Login
          </button>
        </div>
      </ul>
    </div>
  );
}
