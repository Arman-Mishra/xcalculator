import "./styles.css";
import React, { useState } from "react";
import Button from "./Button";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleCalculation = () => {
    try {
      if (input === "") {
        throw new Error("Error");
      }
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
      return;
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input
        type="text"
        id="input"
        style={{ border: "1px solid grey" }}
        value={input}
      />
      <div id="result">{result}</div>
      <div id="buttons">
        <Button content="7" setInput={setInput} />
        <Button content="8" setInput={setInput} />
        <Button content="9" setInput={setInput} />
        <Button content="+" setInput={setInput} />
        <Button content="4" setInput={setInput} />
        <Button content="5" setInput={setInput} />
        <Button content="6" setInput={setInput} />
        <Button content="-" setInput={setInput} />
        <Button content="1" setInput={setInput} />
        <Button content="2" setInput={setInput} />
        <Button content="3" setInput={setInput} />
        <Button content="*" setInput={setInput} />
        <Button
          content="C"
          setInput={setInput}
          setResult={setResult}
          clear={true}
        />
        <Button content="0" setInput={setInput} />
        <Button content="=" setInput={handleCalculation} />
        <Button content="/" setInput={setInput} />
      </div>
    </div>
  );
}
