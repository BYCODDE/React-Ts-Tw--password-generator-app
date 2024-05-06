import { useEffect, useState } from "react";
import copySvg from "/images/icon-copy.svg";

export default function Header({
  isActive,
  getSymbolCharacter,
  getNumberCharacter,
  getUpperCharacters,
  getLowerCharacter,
  isUpper,
  isLower,
  isNumber,
  isSymbol,
  paragraphRef,
}) {
  const [textLength, setTextLength] = useState(0);

  useEffect(() => {
    if (paragraphRef.current) {
      setTextLength(paragraphRef.current.innerHTML.length);
    }
  }, [isActive]);

  useEffect(() => {
    if (textLength > 0) {
      textLength;
    }
  }, [textLength]);
  return (
    <header className="">
      <section className="flex justify-center  flex-col items-center cursor-pointer">
        <h1 className="text-customColor font-bold text-[20px] mb-[16px]">
          Password Generator
        </h1>
        <div className="text-[20px] text-customColor3  flex justify-between items-center p-[16px] pointer-events-none w-[100%] h-[80px] bg-background3 text-Almost-White p-19  font-bold  ">
          <span className="opacity-30"> P4$5W0rD!</span>

          <p
            ref={paragraphRef}
            style={{ fontSize: textLength > 26 ? "8px" : "20px" }}
          >
            {isActive && isUpper ? getUpperCharacters() : null}
            {isActive && isLower ? getLowerCharacter() : null}
            {isActive && isNumber ? getNumberCharacter() : null}
            {isActive && isSymbol ? getSymbolCharacter() : null}
          </p>
          <div className="flex justify-center	gap-[16px]">
            <span className={`text-customColor4 text-[16px] `}>COPIED</span>
            <img src={copySvg} alt="copy_svg" />
          </div>
        </div>
      </section>
    </header>
  );
}
