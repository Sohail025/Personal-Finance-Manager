import { Context } from "../Contexts/ContextProvider";
export default function SavingsItem() {
  const { totalSavings, fakeDataStatus, fakeSavings } = Context();
  return (
    <div className="flex flex-row justify-end lg:gap-5 gap-10 lg:mt-5 lg:mr-4">
      <div className="bg-[#6E8BAD] lg:h-[10rem] lg:w-[20rem] rounded w-[9rem] sm:w-64 sm:h-28">
        <h2 className="lg:ml-2 lg:mt-2">Total Savings</h2>
        <p className="lg:text-[1rem] lg:ml-20 lg:mb-10">
          {!fakeDataStatus ? fakeSavings : totalSavings ? totalSavings : 0}
        </p>
      </div>
      <div
        className="bg-[#6E8BAD] lg:h-[10rem] lg:w-[20rem] rounded w-[9rem] h-20 sm:w-64 sm:h-28
        "
      >
        <h2 className="lg:ml-2 lg:mt-2">Assets Value</h2>
        <p className="lg:text-[1rem] lg:ml-20 lg:mb-10">450$</p>
      </div>
    </div>
  );
}
