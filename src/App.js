import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function App() {
  const [isScannerVisible, setScannerVisible] = useState(false);
  const [data, setData] = useState("Not Found");

  const handleStartScanning = () => {
    setScannerVisible(true);
  };

  const handleStopScanning = () => {
    setScannerVisible(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      {!isScannerVisible && (
        <button onClick={handleStartScanning} style={{ padding: "10px 20px" }}>
          Start Scanning
        </button>
      )}


      {isScannerVisible && (
        <>
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) setData(result.text);
              else setData("Not Found");
            }}
          />
          <button onClick={handleStopScanning} style={{ padding: "10px 20px", marginTop: "20px" }}>
            Stop Scanning
          </button>
        </>
      )}


      <p style={{ marginTop: "20px" }}>Scanned Data: {data}</p>
    </div>
  );
}

export default App;
