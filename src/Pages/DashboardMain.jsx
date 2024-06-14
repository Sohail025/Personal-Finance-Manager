import Header from "../Components/Header";
export default function DashBoardMain() {
  return (
    <main className="  bg-[#A29595] w-10/12 ">
      <div className="mt-3">
        <Header>DashBoard</Header>
        <div className="flex justify-center items-center ">
          <div className="bg-[#D9D9D9] h-[29rem] w-[64.5rem] mt-[1rem] rounded">
            <Item />
          </div>
        </div>
      </div>
    </main>
  );
}
function Item() {
  return (
    <div className="flex flex-row justify-center mt-8 gap-20 mx-6 ">
      <div className="bg-[#6E8BAD] h-[7.5rem] w-[15rem] rounded">
        <h2 className="ml-2 mt-2">Income</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
      <div className="bg-[#6E8BAD] h-[7.5rem] w-[15rem] rounded">
        <h2 className="ml-2 mt-2">Savings</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
      <div className="bg-[#6E8BAD] h-[7.5rem] w-[15rem] rounded">
        <h2 className="ml-2 mt-2">Expenses</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
    </div>
  );
}
