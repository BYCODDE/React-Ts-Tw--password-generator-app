export default function Header() {
  return (
    <header className="">
      <section className="flex justify-center  flex-col items-center">
        <h1 className="">Password Generator</h1>
        <input
          className="pointer-events-none w-[540px] h-[80px] bg-red-300 text-Almost-White p-19 text-[32px] font-bold relative cursor-pointer"
          type="text"
          placeholder="P4$5W0rD!"
        />
      </section>
    </header>
  );
}
