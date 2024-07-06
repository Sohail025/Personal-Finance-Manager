import { Link } from "react-router-dom";
export default function SidebarItem({ children }) {
  return (
    <Link
      to={`/${children}`}
      className="bg-[#3d5d42] text-white font-semibold mt-5 text-center text-[0.9rem] py-[0.1rem] px-2 lg:py-3 rounded lg:w-40 sm:text-[1.5rem] sm:px-2 lg:text-[1rem]"
    >
      {children}
    </Link>
  );
}
