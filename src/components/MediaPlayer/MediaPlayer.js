import React from 'react';
import {MediaControls} from "../MediaControls/MediaControls";
import './MediaPlayer.scss';

export class MediaPlayer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="media-player">
                <MediaControls/>
            </div>
        )
    }
}