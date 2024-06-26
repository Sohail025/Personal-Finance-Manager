import { Link } from "react-router-dom";

export default function Loginbtn({ children }) {
  return (
    <Link
      to={`/${children}`}
      type="submit"
      className="py-2 px-4 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 sm:text-[1.7rem]"
    >
      Login
    </Link>
  );
}
