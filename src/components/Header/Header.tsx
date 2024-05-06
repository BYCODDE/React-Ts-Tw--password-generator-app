import copy from "/images/icon-copy.svg";

export default function Header({
  data,
  isActive,
  value,
  getSymbolCharacter,
  getNumberCharacter,
  getUpperCharacters,
  getLowerCharacter,
  isUpper,
  isLower,
  isNumber,
  isSymbol,
}) {
  return (
    <header className="">
      <section className="flex justify-center  flex-col items-center cursor-pointer">
        <h1 className="text-customColor font-bold text-[20px] mb-[16px]">
          Password Generator
        </h1>
        <div className="text-[20px] text-customColor3  flex justify-between items-center p-[16px] pointer-events-none w-[100%] h-[80px] bg-background3 text-Almost-White p-19  font-bold  ">
          <span className="opacity-30"> P4$5W0rD!</span>

          <p>
            {isActive && isUpper ? getUpperCharacters() : null}
            {isActive && isLower ? getLowerCharacter() : null}
            {isActive && isNumber ? getNumberCharacter() : null}
            {isActive && isSymbol ? getSymbolCharacter() : null}
          </p>
          <div className="flex justify-center	gap-[16px]">
            <span className="text-customColor4 text-[16px]">COPIED</span>
            <img src={copy} alt="copy_svg" />
          </div>
        </div>
      </section>
    </header>
  );
}
