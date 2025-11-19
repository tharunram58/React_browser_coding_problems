import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
  const [QrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR-CODE GENERATOR</h1>
      <div>
        <input
          type="text"
          placeholder="Enter name..."
          name="qr-code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode value={QrCode} size={200} bgColor="#fff"/>
      </div>
    </div>
  );
}
