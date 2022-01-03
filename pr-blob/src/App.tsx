import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [videoFilePath, setVideoFilePath] = useState<string>();

  const handleVideoUpload = (event :React.SyntheticEvent) => {
    console.log((event.target as HTMLInputElement).files)
    const files :FileList | null = (event.target as HTMLInputElement).files
    if (files) {
      setVideoFilePath(URL.createObjectURL(files[0]));
    }
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>HTML5 local media file player example</h1>
        <input type="file" onChange={handleVideoUpload} accept="video/*" />
        <video src={videoFilePath} controls />
      </header>
    </div>
  );
}

export default App;
