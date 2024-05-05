import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
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
        value={value}
        isActive={isActive}
        data={data}
        isUpper={isUpper}
        isLower={isLower}
        isNumber={isNumber}
      ></Header>
      <Main
        handleNumber={handleNumber}
        handleUpper={handleUpper}
        handleLower={handleLower}
        value={value}
        setValue={setValue}
        isActive={isActive}
        setIsActive={setIsActive}
        data={data}
        setData={setData}
      ></Main>
    </>
  );
}

export default App;
