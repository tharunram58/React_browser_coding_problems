import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleRgbColor() {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "hex") handleHexColor();
    else handleRgbColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Generate hex</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate rgb</button>
      <button onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}>
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HEX COLOR" : "RGB COLOR"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
