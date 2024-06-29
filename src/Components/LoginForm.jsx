import Loginbtn from "./Loginbtn";
export default function LoginForm() {
  return (
    <form className="rounded mt-20 lg:w-96 lg:h-80 lg:ml-[0.5rem] lg:mt-28">
      <h1 className="text-[2rem] font-bold w-[18.8rem]">Create Account :</h1>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm font-medium py-2 text-[1.2rem] sm:text-[1.5rem] lg:text-[1rem] lg:py-2 w-[18.8rem] sm:py-5"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          className="lg:px-3 lg:py-2 lg:w-84 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent sm:h-11 lg:h-7 w-[18.8rem] sm:w-[31rem] lg:w-[22rem]"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="text-sm font-medium lg:py-2 lg:text-[1rem] sm:text-[1.5rem] mb-2 w-[18.8rem] sm:py-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="lg:px-3 lg:py-2 lg:w-84 w-[18.8rem] sm:w-full sm:h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent lg:h-7 lg:w-[22rem]"
        />
      </div>
      <br></br>
      <Loginbtn>dashboard</Loginbtn>
    </form>
  );
}
