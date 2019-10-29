import React from 'react';
import Fade from 'react-reveal/Fade';
import { StartButton } from './components/StartButton/StartButton';
import './App.scss';
import { MediaPlayer } from "./components/MediaPlayer/MediaPlayer";

function App() {
  return (
    <div className="App">
      <Fade top>
        <div className="App-header">MEDIA MASTER</div>
      </Fade>
      <div className="button-box">
        <Fade top><StartButton type={'mp3'} buttonText={'MP3 Player'} /></Fade>
        <Fade top><StartButton type={'video'} buttonText={'Video Player'} /></Fade>
      </div>
        <MediaPlayer/>
    </div>
  );
}

export default App;
