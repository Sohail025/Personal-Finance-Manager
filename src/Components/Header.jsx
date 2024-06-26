export default function Header({ children, gclass }) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`bg-[#B6BA9E] lg:h-[3.5rem] lg:w-[64.5rem] lg:rounded lg:pt-2 lg:pl-2 lg:text-[1.7rem] font-bold w-full ${gclass} py-3`}
      >
        {children}
      </div>
    </div>
  );
}
