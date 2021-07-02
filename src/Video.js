import React from 'react'
import { Player ,LoadingSpinner } from 'video-react';
import "video-react/dist/video-react.css";

export default function Video() {
    return (
        <div>
             <Player
            playsInline
            startTime={200}
            src="https://www.onegml.com/assets/videos/CDHX.mp4"
        >
        </Player>
        </div>
    )
}
