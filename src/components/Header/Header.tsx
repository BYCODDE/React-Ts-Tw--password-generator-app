import copy from "/images/icon-copy.svg";

export default function Header() {
  return (
    <header className="">
      <section className="flex justify-center  flex-col items-center cursor-pointer">
        <h1 className="text-customColor font-bold text-[20px] mb-[16px]">
          Password Generator
        </h1>
        <div className="flex justify-between items-center p-[16px] pointer-events-none w-[100%] h-[80px] bg-background3   text-Almost-White p-19 text-[32px] font-bold  ">
          <span> P4$5W0rD!</span>
          <img src={copy} alt="copy_svg" />
        </div>
      </section>
    </header>
  );
}
