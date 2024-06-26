export default function TailwindPractice() {
  return (
    <>
      <div className="container bg-gradient-to-tr from-[#174d6c] to-[#599f79] h-screen grid grid-cols-2 place-items-center">
        <div className="h-[5rem] w-[10rem] bg-[#fcc]">box1</div>
        <div className="h-[5rem] w-[10rem] bg-[#509189]">box2</div>
        <div className="h-[5rem] w-[10rem] bg-[#6ff1b9] flex-none">box3</div>
        <div className="h-[5rem] w-[10rem] bg-[#7946c1]">box4</div>
      </div>
    </>
  );
}
