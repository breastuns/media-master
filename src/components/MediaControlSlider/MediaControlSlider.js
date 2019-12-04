import React from 'react';
import './MediaControlSlider.scss';

export class MediaControlSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      sliderValue: 50
    };

    this.slideValueChange = this.slideValueChange.bind(this);
  }

  slideValueChange = event => {
    this.setState({ sliderValue: event.target.value });
  };

  render() {
    return (
      <div className="slider-container">
        <input
          className="slider"
          type="range"
          min="1"
          max="100"
          value={this.state.sliderValue}
          onChange={this.slideValueChange}
        />
      </div>
    );
  }
}
