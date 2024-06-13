export default function InputForm() {
  return (
    <form className="flex flex-row justify-center gap-12 mt-5">
      <p className="bg-[#83A8A1] px-8 py-2 rounded">450$</p>
      <div className="flex gap-3">
        <input className="rounded" placeholder="Value $"></input>
        <input
          className="w-96 rounded"
          placeholder="Enter The New Income Streem"
        ></input>
      </div>
      <button className="bg-[#83A8A1] px-5 py-2 rounded">Submit</button>
    </form>
  );
}
