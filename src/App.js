import React, { useState } from 'react';
import './App.css';
import cat from './clement-falize-b9K_LTz079c-unsplash.jpg'

function App() {
  const [file, setFile] = useState('')


  return (
    <div className="App">
      <form className="form">
        <input className="input" type="text"
          placeholder="Masukan link Ijazah di sini"
          name="url" value={file} onChange={e => setFile(e.target.value)}></input>
      </form>
      <p>{file ? file : 'Photo by Clément Falize on Unsplash'}</p>
      <img src={file ? file : cat} alt="PDF tuh. Tunggu lagi loading. Kalau lama coba cut trus paste lagi ya" width="1080"></img>
      {file ?
        <iframe title="pdf viewer"
          src={`https://docs.google.com/viewer?url=${file}&embedded=true`}>
        </iframe>
        : null}
    </div>
  );
}

export default App;