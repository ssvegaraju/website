import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me-content sakura-petals-container background-container">
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="clouds"></div>
            {[...Array(20)].map((_, index) => (
                <div key={index} className="sakura-petal" />
            ))}
            <h1>Sukeerth Vegaraju</h1>
            {/* <h6>(Sue-Key-Earth Vay-Gah-Rah-Joo)</h6> */}
            <p>Software Developer with 4+ years of combined experience working in fast-paced, demanding roles ranging from local indie game studios to large teams working on open-source healthcare solutions.</p>
        </div>
    );
}

export default AboutMe;
