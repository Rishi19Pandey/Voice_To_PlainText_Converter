import React, { useState } from 'react';
// import { useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';


import './App.css';

const App = () => {
  const [textToCopy, setToCopy] = useState("If you finish speaking then press text area then push copy button otherwise speak first..");
  const [isCopied, setCopied] = useClipboard(textToCopy);
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return <span className='text1'>Browser Doesn't Support</span>;
  }



  const clearFunction = () => {
    window.location.reload();   // For reload the page.
  }

  return (
    <div className='mainContainer'>
      <h2 className='text1'> Speech To Text <span className='span1'>Converter</span></h2>

      <h3 className='text2'>Convert your <span className='span2'>Speech</span> into text form lets use it </h3>

      <div className='textArea1' onClick={() => { setToCopy(transcript) }}>{transcript}</div>

      <div className='Buttons'>
        <button className='button1' onClick={setCopied}>{isCopied ? 'Copied 🤙' : '©️ copy'}</button>
        <button onClick={startListening} className='button1'> 🎤 Start Speaking</button>
        <button onClick={SpeechRecognition.stopListening} className='button1'> 🚫 Stop Speaking</button>
      </div>
      <button className='button2' onClick={clearFunction}>Clear</button>
    </div >
  )
}

export default App;