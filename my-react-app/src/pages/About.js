import React from 'react';
import Logo from './images/logo.svg'


export default function About() {
    return (
        // <div style={styles.card}>
            <div className="card" id="cardContainer" >
            <img src={Logo} alt="logo" id="profilePic"/>
            <p> Hello! I am a Full-Stack Web Developer located in California. 
                <br/>I obtained a Bachelor's Degree in Business Administration from North Carolina State University, focused in Finance,
                <br/> and received my Full-Stack Web Development education from UC Berkeley. 
                I am an avid outdoors person and love to design applications that have a positive impact on the World we live in!
                <br/>
                </p>
        </div>
    );
}

