import InputForm from "./InputForm";
import Header from "./Header";
export default function ExpensesMain() {
  return (
    <main className="  bg-[#A29595] w-10/12 ">
      <div className="mt-3">
        <Header>Expenses</Header>
        <div className="flex justify-center items-center ">
          <div className="bg-[#D9D9D9] h-[29rem] w-[64.5rem] mt-[1rem] rounded">
            <InputForm />
            <Item />
          </div>
        </div>
      </div>
    </main>
  );
}
function Item() {
  return (
    <div className="grid grid-cols-5 place-items-center mt-12 gap-5 mx-6">
      <div className="bg-[#6E8BAD] h-[5rem] w-[10rem] rounded">
        <h2 className="ml-2 mt-2">Gas bill</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
      <div className="bg-[#6E8BAD] h-[5rem] w-[10rem] rounded">
        <h2 className="ml-2 mt-2">Gas bill</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
      <div className="bg-[#6E8BAD] h-[5rem] w-[10rem] rounded">
        <h2 className="ml-2 mt-2">Gas bill</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
      <div className="bg-[#6E8BAD] h-[5rem] w-[10rem] rounded">
        <h2 className="ml-2 mt-2">Gas bill</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
      <div className="bg-[#6E8BAD] h-[5rem] w-[10rem] rounded">
        <h2 className="ml-2 mt-2">Gas bill</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
      <div className="bg-[#6E8BAD] h-[5rem] w-[10rem] rounded">
        <h2 className="ml-2 mt-2">Gas bill</h2>
        <p className="text-[1rem] ml-20 mb-10">450$</p>
      </div>
    </div>
  );
}
