/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";

export default function Main() {
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };
  return (
    <main className="pt-[21px] pr-[16px] pb-[16px] pl-[16px] w-[100%] max-h-[423px] bg-background3 mt-[24px]">
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
          />
        </div>
      </section>
      <section className="flex flex-col">
        <label className="flex gap-[20px] text-customColor3">
          <input type="checkbox" name="Include Uppercase Letters" id="" />{" "}
          Include Uppercase Letters
        </label>
        <label
          className="flex gap-[20px] text-customColor3"
          htmlFor="Include Lowercase Letters"
        >
          <input type="checkbox" name="Include Lowercase Letters" id="" />{" "}
          Include Lowercase Letters
        </label>
        <label
          className="flex gap-[20px] text-customColor3"
          htmlFor="Include Numbers"
        >
          <input type="checkbox" name="Include Numbers" id="" />
          Include Numbers
        </label>
        <label
          className="flex gap-[20px] text-customColor3"
          htmlFor="Include Symbols"
        >
          <input type="checkbox" name="Include Symbols" id="" />
          Include Symbols
        </label>
      </section>

      <section className="">
        <div className="bg-background4 flex justify-between p-[20px] text-[18px] mt-[32px] mb-[16px]">
          <span className="text-customColor opacity-70">STRENGTH</span>
          <div className="flex gap-[8px]">
            <span className="mr-[16px] text-customColor3">MEDIUM</span>

            <div className="w-[10px] h-[28px] border-2 border-solid border-Almost-White dark:border-E6E5EA"></div>
            <div className="w-[10px] h-[28px] border-2 border-solid border-Almost-White dark:border-E6E5EA"></div>
            <div className="w-[10px] h-[28px] border-2 border-solid border-Almost-White dark:border-E6E5EA"></div>
            <div className="w-[10px] h-[28px] border-2 border-solid border-Almost-White dark:border-E6E5EA"></div>
          </div>
        </div>
        {/* <button className="" type="button">
          GENERATE
        </button> */}
      </section>
    </main>
  );
}
