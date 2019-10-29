import React from 'react';
import audioFile from '../../assets/all-star.mp3';
import { FaPlay, FaPause } from 'react-icons/fa';
import './MediaControls.scss';

export class MediaControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      audioPlayer: new Audio(audioFile)
    };

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  }

  togglePlaying = state => {
    return {
      ...state,
      playing: !state.playing
    };
  };

  playAudio = () => {
    this.state.audioPlayer.play();
    this.setState(this.togglePlaying);
  };

  pauseAudio = () => {
    this.state.audioPlayer.pause();
    this.setState(this.togglePlaying);
  };

  render() {
    return (
      <div className="media-control-bar">
        {this.state.playing ? (
          <FaPause onClick={this.pauseAudio}/>
        ) : (
          <FaPlay onClick={this.playAudio}/>
        )}
      </div>
    );
  }
}
