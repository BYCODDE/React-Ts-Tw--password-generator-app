/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, useState } from "react";
import arrow from "/images/icon-arrow-right.svg";
import { MainProps } from "../../App";
export default function Main({
  value,
  setValue,
  isActive,
  setIsActive,
  handleUpper,
  handleLower,
  handleNumber,
  handleSymbol,
}: MainProps) {
  const [num, setNum] = useState(0);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNum(event.target.checked ? num + 1 : num - 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  const handleActive = () => {
    setIsActive(!isActive);
  };
  const colorStop = (value / 20) * 100 + "%";
  const thumbColor = "#A4FFAF";

  const gradient = `linear-gradient(to right, ${thumbColor} 0%, ${thumbColor} ${colorStop}, #18171F ${colorStop}, #18171F 100%)`;

  return (
    <main className="pt-[21px] pr-[16px] pb-[16px] pl-[16px] w-[100%] max-h-[100%] bg-background3 mt-[24px]">
      <section className="flex justify-between items-center">
        <h3 className="text-[18px] text-customColor3"> Character Length</h3>
        <h3 className="text-[32px] text-customColor4">{value}</h3>
      </section>
      <section className="mt-[23px]">
        <div className="">
          <input
            type="range"
            min={0}
            max={20}
            value={value}
            className="mb-[42px]  w-full bg-center h-[8px] appearance-none rounded-none border-none focus:ring-0 bg-background4"
            onChange={handleChange}
            style={{ backgroundImage: gradient }}
          />
        </div>
      </section>
      <section className="flex flex-col">
        <label className="flex gap-[20px] text-customColor3">
          <input
            className="w-5 h-5 border-2 border-almost-white cursor-pointer appearance-none"
            type="checkbox"
            name="Include Uppercase Letters"
            onClick={() => handleUpper()}
            onChange={handleCheckboxChange}
          />{" "}
          Include Uppercase Letters
        </label>
        <label className="flex gap-[20px] text-customColor3">
          <input
            className="w-5 h-5 border-2 border-almost-white cursor-pointer appearance-none"
            type="checkbox"
            name="Include Lowercase Letters"
            onClick={() => handleLower()}
            onChange={handleCheckboxChange}
          />{" "}
          Include Lowercase Letters
        </label>
        <label className="flex gap-[20px] text-customColor3">
          <input
            className="w-5 h-5 border-2 border-almost-white cursor-pointer appearance-none"
            type="checkbox"
            name="Include Numbers"
            onClick={() => handleNumber()}
            onChange={handleCheckboxChange}
          />
          Include Numbers
        </label>
        <label className="flex gap-[20px] text-customColor3">
          <input
            className="w-5 h-5 border-2 border-almost-white cursor-pointer appearance-none "
            type="checkbox"
            name="Include Symbols"
            onClick={() => handleSymbol()}
            onChange={handleCheckboxChange}
          />
          Include Symbols
        </label>
      </section>

      <section className="">
        <div className="bg-background4 flex justify-between p-[20px] text-[18px] mt-[32px] mb-[16px]">
          <span className="text-customColor opacity-70">STRENGTH</span>
          <div className="flex gap-[8px]">
            <span className="mr-[16px] text-customColor3">
              {num === 1 ? "TOO WEAK" : null}
            </span>
            <span className="mr-[16px] text-customColor3">
              {num === 2 ? " WEAK" : null}
            </span>
            <span className="mr-[16px] text-customColor3">
              {num === 3 ? "MEDIUM" : null}
            </span>
            <span className="mr-[16px] text-customColor3">
              {num === 4 ? "HARD" : null}
            </span>

            <div
              className="w-[10px] h-[28px] border-2 border-solid border-Almost-White dark:border-E6E5EA"
              style={{
                backgroundColor:
                  num === 1
                    ? "#F64A4A"
                    : num === 2
                    ? "#FB7C58"
                    : num === 3
                    ? "#F8CD65"
                    : num === 4
                    ? "#A4FFAF"
                    : "",
              }}
            ></div>
            <div
              className="w-[10px] h-[28px] border-2 border-solid border-Almost-White dark:border-E6E5EA"
              style={{
                backgroundColor:
                  num === 2
                    ? "#FB7C58"
                    : num === 3
                    ? "#F8CD65"
                    : num === 4
                    ? "#A4FFAF"
                    : "",
              }}
            ></div>
            <div
              style={{
                backgroundColor:
                  num === 3 ? "#F8CD65" : num === 4 ? "#A4FFAF" : "",
              }}
              className="w-[10px] h-[28px] border-2 border-solid border-Almost-White dark:border-E6E5EA"
            ></div>

            <div
              className="w-[10px] h-[28px] border-2 border-solid border-Almost-White dark:border-E6E5EA"
              style={{
                backgroundColor: num === 4 ? "#A4FFAF" : "",
              }}
            ></div>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center">
        {" "}
        <button
          className="bg-customColor4 flex justify-center items-center w-[100%] h-[56px] text-[20px] gap-[16px]"
          type="button"
          onClick={handleActive}
        >
          GENERATE
          <img src={arrow} alt="arrow" />
        </button>
      </section>
    </main>
  );
}
