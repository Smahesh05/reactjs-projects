import { useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetX, offsetY } = event.nativeEvent;

    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetX, offsetY } = event.nativeEvent;

    ctx.strokeStyle = currentColor;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadSignature = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "signature.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleColorChange = (event) => {
    setCurrentColor(event.target.value);
  };

  return (
    <div className="App">
      <h1>Digital Signature Generator</h1>
      <label htmlFor="" style={{ marginRight: "10px" }}>
        pick color
      </label>
      <input type="color" value={currentColor} onChange={handleColorChange} />
      <div className="signature-container">
        <canvas
          ref={canvasRef}
          width={900}
          height={450}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          style={{ cursor: "crosshair" }}
        ></canvas>
      </div>
      <div className="button-container">
        <button onClick={clearCanvas} className="red">
          Clear
        </button>
        <button onClick={downloadSignature} className="green">
          Download
        </button>
      </div>
    </div>
  );
}

export default App;
