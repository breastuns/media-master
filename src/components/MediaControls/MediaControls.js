import React from 'react';
import audioFile from '../../assets/all-star.mp3';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MediaControlSlider } from '../MediaControlSlider/MediaControlSlider';
import './MediaControls.scss';

export class MediaControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '',
      currentTime: '00:00',
      playing: false,
      audioPlayer: new Audio(audioFile)
    };

    this.state.audioPlayer.ontimeupdate = () => {
      this.setState(state => {
        return {
          ...state,
          currentTime: this.calculateTime(this.state.audioPlayer.currentTime)
        };
      });
    };

    this.state.audioPlayer.ondurationchange = () => {
      this.setState(state => {
        return {
          ...state,
          duration: this.calculateTime(this.state.audioPlayer.duration)
        };
      });
    };

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  }

  calculateTime = time => {
    return '0' + Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
  };

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
        <div>
          {this.state.playing ? (
            <FaPause onClick={this.pauseAudio} />
          ) : (
            <FaPlay onClick={this.playAudio} />
          )}
        </div>
        <MediaControlSlider />
        <div>
          <span className="time">{`${this.state.currentTime} / ${this.state.duration}`}</span>
        </div>
      </div>
    );
  }
}
