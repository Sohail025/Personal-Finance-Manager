import { Context } from "../Contexts/ContextProvider";
export default function DashboardItem() {
  const {
    totalIncome,
    totalExpense,
    totalSavings,
    fakeDataStatus,
    fakeIncome,
    fakeExpense,
  } = Context();
  return (
    <div className="flex lg:flex-row flex-col justify-center lg:mt-8 lg:gap-20 lg:mx-6 gap-10 mt-10">
      <div className="bg-[#0f3462] text-[#fffc] lg:h-[7.5rem] lg:w-[15rem] rounded w-[23.5rem] h-[10rem] sm:w-[35rem] sm:h-[15rem] shadow-md">
        <h2 className="lg:ml-2 lg:mt-2 underline underline-offset-4">Income</h2>
        <p className=" lg:mb-10 lg:text-[3rem] lg:font-semibold text-center">{`${
          !fakeDataStatus ? fakeIncome : totalIncome ? totalIncome : 0
        }$`}</p>
      </div>
      <div className="bg-[#0f3462] text-[#fffc] lg:h-[7.5rem] lg:w-[15rem] rounded w-[23.5rem] h-[10rem] sm:w-[35rem] sm:h-[15rem] shadow-md">
        <h2 className="lg:ml-2 lg:mt-2 underline lg:underline-offset-4">
          Savings
        </h2>
        <p className=" lg:mb-10 lg:text-[3rem] lg:font-semibold text-center">{`${
          !fakeDataStatus
            ? fakeIncome - fakeExpense
            : totalSavings
            ? totalSavings
            : 0
        }$`}</p>
      </div>
      <div className="bg-[#0f3462] text-[#fffc] lg:h-[7.5rem] lg:w-[15rem] rounded w-[23.5rem] h-[10rem] sm:w-[35rem] sm:h-[15rem] shadow-md">
        <h2 className="lg:ml-2 lg:mt-2 underline lg:underline-offset-4">
          Expenses
        </h2>
        <p className=" lg:mb-10 lg:text-[3rem] lg:font-semibold text-center">{`${
          !fakeDataStatus ? fakeExpense : totalExpense ? totalExpense : 0
        }$`}</p>
      </div>
    </div>
  );
}
