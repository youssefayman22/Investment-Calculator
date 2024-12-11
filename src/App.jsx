import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  const HandleUserInput = (label, value) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [label]: +value,
    }));
  };

  const validInput = userInput.duration > 0;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={HandleUserInput} />
      {!validInput && <p className="center">Please Enter a valid duration</p>}
      {validInput && <Result userInput={userInput} />}
    </>
  );
}

export default App;
