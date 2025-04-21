import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") return setInput("");
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
      return;
    }
    setInput((prev) => prev + value);
  };

  const buttons = [
    "C", "/", "*", "←",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".",
  ];

  const appStyle = {
    minHeight: "100vh",
    backgroundColor: "#1e1e1e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerStyle = {
    backgroundColor: "#2c2c2c",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    width: "320px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    marginTop: "20px",
  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <Display value={input} />
        <div style={gridStyle}>
          {buttons.map((btn, i) => (
            <Button
              key={i}
              label={btn}
              onClick={() => {
                if (btn === "←") {
                  setInput((prev) => prev.slice(0, -1));
                } else {
                  handleClick(btn);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
