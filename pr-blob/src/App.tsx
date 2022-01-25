import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


// interface MediaType {
//   lastModified: number;
//   lastModifiedDate: Date;
//   name: string;
//   size: number;
//   type: string;
//   webkitRelativePath  
// }

function App() {
  
  const [videoFilePath, setVideoFilePath] = useState<string>();

  const createFileURL = (files: FileList|null) :string => {

    

    // var URL = window.URL || window.webkitURL;
    /** File 객체도 name과 lastModifiedDate 속성이 존재하는 Blob 객체입니다.
     * https://stackoverflow.com/questions/26533691/how-to-create-blob-of-a-video-file
     * localforge 쓴느법 : https://stackoverflow.com/questions/60072027/html5-video-source-as-locally-stored-blob-not-working-anymore
     */

    if (files) {
      console.log(files)

      const file :File = files[0]

      
      return URL.createObjectURL(file)
    } else {
      return ""
    }

    // return URL.createObjectURL(file)

  }

  
  const handleVideoUpload = (event :React.SyntheticEvent) :void => {
    
    const files :FileList | null = (event.target as HTMLInputElement).files
    setVideoFilePath(createFileURL(files))
      // setVideoFilePath(URL.createObjectURL(files[0]));

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
