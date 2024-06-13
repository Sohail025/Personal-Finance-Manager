import Header from "./Header";
export default function ExpensesMain() {
  return (
    <main className="  bg-[#A29595] w-10/12 ">
      <div className="mt-3">
        <Header>Savings</Header>
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
    <div className="flex flex-row justify-end gap-5 mt-5 mr-4">
      <div className="bg-[#6E8BAD] h-[10rem] w-[20rem] rounded">
        <h2 className="ml-2 mt-2">Total Savings</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
      <div className="bg-[#6E8BAD] h-[10rem] w-[20rem] rounded">
        <h2 className="ml-2 mt-2">Assets Value</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
    </div>
  );
}
