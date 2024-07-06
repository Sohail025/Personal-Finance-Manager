import { Context } from "../Contexts/ContextProvider";
export default function Header({ children }) {
  const { FakeDataHandler, fakeDataStatus } = Context();
  return (
    <div className="flex justify-center items-center">
      <div
        className={`bg-[#0f3462] text-[#fffc] lg:h-[3.5rem] lg:w-[64.5rem] lg:rounded lg:pt-2 lg:pl-2 lg:text-[1.7rem] font-bold w-full py-3 flex justify-between mx-3 rounded indent-2 sm:mx-5 sm:text-[1.8rem]`}
      >
        {children}
        {children === "DashBoard" && !fakeDataStatus ? (
          <button
            onClick={FakeDataHandler}
            className="bg-[#e9545d] text-[#fff] font-bold rounded text-[0.7rem] sm:px-5 sm:text-[1rem] mr-5 text-center "
          >
            Clear Fake Data
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
