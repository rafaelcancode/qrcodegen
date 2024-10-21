import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const clearInput = () => {
    setInputText('');
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrCodeCanvas');
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text or URL"
        style={{ padding: '10px', width: '200px' }}
      />
      <div style={{ marginTop: '20px', width: '128px', height: '128px' }}>
        <QRCodeCanvas id="qrCodeCanvas" value={inputText} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={downloadQRCode} style={{ marginRight: '10px' }}>Download QR Code</button>
        <button onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
};

export default App;
