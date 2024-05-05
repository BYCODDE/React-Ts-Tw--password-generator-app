import copy from "/images/icon-copy.svg";

export default function Header({ data, isActive, value }) {
  const getUpperCharacters = () => {
    const upperCharacters = [];
    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * data[0].length);
      const randomChar = data[0][randomIndex];
      if (randomChar !== randomChar.toLowerCase()) {
        upperCharacters.push(randomChar);
      } else {
        i--;
      }
    }

    return upperCharacters;
  };

  const getLowerCharacter = () => {
    const lowerCharacters = [];
    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * data[0].length);
      const randomChar = data[0][randomIndex];
      if (randomChar !== randomChar.toUpperCase()) {
        lowerCharacters.push(randomChar);
      } else {
        i--;
      }
    }
    return lowerCharacters;
  };
  const getNumberCharacter = () => {
    const numberCharacters = [];
    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * data[0].length);
      const randomChar = data[0][randomIndex];
      if (!isNaN(Number(randomChar))) {
        numberCharacters.push(randomChar);
      } else {
        i--;
      }
    }
    return numberCharacters;
  };
  const getSymbolCharacter = () => {
    const symbolRegex = /[!@#$%^&*()_+{}|:<>?`\-=[\];',./]/;
    const symbolCharacters = [];
    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * symbolRegex.source.length);
      const randomChar = symbolRegex.source[randomIndex];
      if (symbolRegex.test(randomChar)) {
        symbolCharacters.push(randomChar);
      } else {
        i--;
      }
    }
    return symbolCharacters;
  };

  return (
    <header className="">
      <section className="flex justify-center  flex-col items-center cursor-pointer">
        <h1 className="text-customColor font-bold text-[20px] mb-[16px]">
          Password Generator
        </h1>
        <div className=" text-customColor3  flex justify-between items-center p-[16px] pointer-events-none w-[100%] h-[80px] bg-background3 text-Almost-White p-19 text-[32px] font-bold  ">
          <span className="opacity-30"> P4$5W0rD!</span>
          {/* <p>{getUpperCharacters()}</p> */}
          {/* <p>{getLowerCharacter()}</p> */}
          {/* <p>{getNumberCharacter()}</p> */}
          <p>{getSymbolCharacter()}</p>
          <img src={copy} alt="copy_svg" />
        </div>
      </section>
    </header>
  );
}
