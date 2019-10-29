import React from 'react';
import './StartButton.scss';

export class StartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
    this.icons = {
      mp3: <span className="button-icon">&#127926;</span>,
      video: <span className="button-icon">&#128249;</span>
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover = () => {
    this.setState(this.toggleHover);
  };

  toggleHover = state => {
    return {
      isHovering: !state.isHovering
    };
  };

  render() {
    return (
      <div className="start-button-container">
        <button
          className={this.state.isHovering ? 'hovering' : ''}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <span>{this.props.buttonText}</span>
          {this.icons[this.props.type]}
        </button>
      </div>
    );
  }
}
