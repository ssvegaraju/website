import { useState } from 'react';
import './Welcome.css';


const profilePic = require('../../Profile_Picture.jpg');

function Welcome({ onSceneSelect }) {

    return (
        <div>
            Welcome to this page!
            <div id='welcomeContainer'>
                <div id='profPic'>
                    <img src={profilePic} alt='Sukeerth'></img>
                </div>
                <div id='menuContainer'>
                    <ul>
                        <option className='menuOption' onClick={(e) => onSceneSelect('AboutMe')}>About Me</option>
                        <option className='menuOption'>Experience</option>
                        <option className='menuOption'>Projects</option>
                        <option className='menuOption'>Education</option>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Welcome;