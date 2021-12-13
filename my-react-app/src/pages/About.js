import React from 'react';
import { Card, Container } from 'react-bootstrap';

import Logo from './images/profileimg.jpg'


export default function About() {
    return (
        // <div style={styles.card}>
        <div id="bodyText">
            <div id="picDiv">
                <img src={Logo} alt="Headshot of Matt" id="profilePic" />
            </div>
            <div id="clearCard">
            <h2> Hi, I'm Matt! </h2>
            <h5>I'm a Full-Stack Web Developer with a background in Business Management with an emphasis on Finance.</h5>
            <h5>I love building apps as well as teams and am based in Northern California.</h5>
            </div>
                        
        </div>
    );
}

