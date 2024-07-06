export default function DashboardSingleItem({ children, name }) {
  return (
    <div className="bg-[#0f3462] text-[#fffc] lg:h-[7.5rem] lg:w-[15rem] rounded w-full h-[10rem] sm:h-[15rem] shadow-md ">
      <h2 className=" indent-3 mt-2 lg:ml-2 lg:mt-2 underline underline-offset-4">
        {name}
      </h2>
      <p className=" lg:mb-10 lg:text-[3rem] lg:font-semibold text-center text-[5rem] text-shadow font-bold">
        {children}
      </p>
    </div>
  );
}
