import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleChange(identifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: Number(newValue), //if we dont use Number() -> event.target.value is always a string
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!isInputValid && (
        <p className="center">Duration must be greater than zero</p>
      )}
      {isInputValid && <Results results={userInput} />}
    </>
  );
}

export default App;
