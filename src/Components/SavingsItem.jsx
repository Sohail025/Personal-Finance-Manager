import { Context } from "../Contexts/ContextProvider";
import { fakeSavings } from "../Contexts/Variables";
export default function SavingsItem() {
  const { totalSavings, fakeDataStatus } = Context();
  return (
    <div className=" lg:gap-5 lg:mr-4 flex justify-end ">
      <div className="bg-[#37c0b9] text-white lg:h-[10rem] lg:w-[20rem] rounded shadow-lg text-shadow sm:pb-9 lg:justify-end lg:mt-5">
        <h2 className="lg:ml-2 lg:mt-2 sm:indent-2 pt-2">Total Savings</h2>
        <p className="text-center text-[5rem] font-bold ">
          {!fakeDataStatus ? fakeSavings : totalSavings ? totalSavings : 0}$
        </p>
      </div>
    </div>
  );
}
