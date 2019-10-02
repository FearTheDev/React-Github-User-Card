import React from 'react';
import Nggyu from './nggyu.mp4';

const RickRollComponent = props => {
    return (
        <div className="moving-video">
            <div className="message">
                <h2>You got rick rolled in React!</h2>
                <p>Have a wonderful day --FearTheDev</p>
            </div>
            
            <video className="the-video" autoPlay={true} loop preload>
                <source src={Nggyu} />
            </video>
        </div>
    );
}

export default RickRollComponent;