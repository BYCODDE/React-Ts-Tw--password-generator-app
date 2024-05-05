import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [data, setData] = useState(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?`-=[]\\;',./'"
  );
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Header isActive={isActive} data={data}></Header>
      <Main
        isActive={isActive}
        setIsActive={setIsActive}
        data={data}
        setData={setData}
      ></Main>
    </>
  );
}

export default App;
