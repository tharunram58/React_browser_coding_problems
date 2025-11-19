import { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorFormat, setColorFormat] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomGenerate(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateHexColor() {
    // #12B45F

    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomGenerate(hex.length)];
    }

    setColor(hexColor);
  }

  function handleGenerateRgbColor() {
    // rgb(111,232,145)

    const r = randomGenerate(256);
    const g = randomGenerate(256);
    const b = randomGenerate(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(()=>{
    if(colorFormat === 'hex') handleGenerateHexColor()
    else handleGenerateRgbColor()
  },[colorFormat])

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px", // spacing between button row and lower div
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px", // spacing between buttons
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => setColorFormat("hex")}>Hex-Color</button>
        <button onClick={() => setColorFormat("rgb")}>Rgb-Color</button>
        <button
          onClick={
            colorFormat === "hex"
              ? handleGenerateHexColor
              : handleGenerateRgbColor
          }
        >
          Generate-RandomColor
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p>{colorFormat === "hex" ? "Hex color" : "Rgb color"}</p>
        <p>{color}</p>
      </div>
    </div>
  );
}
