import React, { useState } from 'react';
import './App.css';
import cat from './clement-falize-b9K_LTz079c-unsplash.jpg'

function App() {
  const [file, setFile] = useState('')


  return (
    <div className="App">
      <form className="form">
        <input className="input" type="text"
          placeholder="Insert S3 Image/PDF URL here"
          name="url" value={file} onChange={e => setFile(e.target.value)}></input>
      </form>
      <p>{file ? file : 'Photo by Clément Falize on Unsplash'}</p>
      <img src={file ? file : cat} alt="The link might be a PDF, please wait. Or try re-paste the URL." width="1080"></img>
      {file ?
        <iframe title="pdf viewer"
          src={`https://docs.google.com/viewer?url=${file}&embedded=true`}>
        </iframe>
        : null}
    </div>
  );
}

export default App;