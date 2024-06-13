export default function Header({ children }) {
  return (
    <header className="flex justify-center items-center">
      <div className="bg-[#B6BA9E] h-[3.5rem] w-[64.5rem] rounded pt-2 pl-2 text-[1.7rem] font-bold">
        {children}
      </div>
    </header>
  );
}
