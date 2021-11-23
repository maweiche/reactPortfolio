import React from 'react';
import Logo from './images/logo.svg'

// const styles = {
//     card: {
//         margin: 5,
//         background: 'black',
//         display: 'flex',
//         justifyContent: 'center',
//         color: 'white'

//     }
// };

export default function About() {
    return (
        // <div style={styles.card}>
            <div class="card" id="cardContainer" >
            <img src={Logo} alt="logo" id="profilePic"/>
            <p> Hello! I am a (soon to be) Full-Stack Web Developer originally from North Carolina, now located in California. 
                <br/>I obtained a Bachelor's Degree in Business Administration from North Carolina State University and received my 
                <br/>Full-Stack Web Development education from UC Berkeley. 
                I am an avid outdoors person and love to design applications that have a positive impact on the World we live in!
                <br/>
                </p>
        </div>
    );
}

