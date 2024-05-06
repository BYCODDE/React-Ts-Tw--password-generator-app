import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


export interface HeaderProps {
  isActive: boolean;
  getSymbolCharacter: () => string[];
  getNumberCharacter: () => string[];
  getUpperCharacters: () => string[];
  getLowerCharacter: () => string[];
  isUpper: boolean;
  isLower: boolean;
  isNumber: boolean;
  isSymbol: boolean;
  paragraphRef: React.RefObject<HTMLParagraphElement>;
  
}

function App() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState([
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?`-=[]\\;',./'",
  ]);
  const [isActive, setIsActive] = useState(false);

  const [isUpper, setIsUpper] = useState(false);

  const handleUpper = () => {
    setIsUpper(!isUpper);
  };

  const [isLower, setIsLower] = useState(false);
  const handleLower = () => {
    setIsLower(!isLower);
  };

  const [isNumber, setIsNumber] = useState(false);

  const handleNumber = () => {
    setIsNumber(!isNumber);
  };

  const [isSymbol, setIsSymbol] = useState(false);

  const handleSymbol = () => {
    setIsSymbol(!isSymbol);
  };

  const [value, setValue] = useState(0);

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
    <>
      <Header 
        getSymbolCharacter={getSymbolCharacter}
        getNumberCharacter={getNumberCharacter}
        getUpperCharacters={getUpperCharacters}
        getLowerCharacter={getLowerCharacter}
        isActive={isActive}
        isUpper={isUpper}
        isLower={isLower}
        isNumber={isNumber}
        isSymbol={isSymbol}
        paragraphRef={paragraphRef}
      />

      <Main
        handleSymbol={handleSymbol}
        handleNumber={handleNumber}
        handleUpper={handleUpper}
        handleLower={handleLower}
        value={value}
        setValue={setValue}
        isActive={isActive}
        setIsActive={setIsActive}
      ></Main>
    </>
  );
}

export default App;
