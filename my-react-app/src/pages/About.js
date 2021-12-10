import React from 'react';
import { Card, Container } from 'react-bootstrap';

import Logo from './images/logo.svg'


export default function About() {
    return (
        // <div style={styles.card}>
        <Container  >
            <Card className="card" id="cardContainer">
                <Card.Body>
                    <img src={Logo} alt="logo" id="profilePic"/>
                    <Card.Text id="bodyText"> Hello! I am a Full-Stack Web Developer located in California. 
                        <br/>I obtained a Bachelor's Degree in Business Administration from North Carolina State University, focused in Finance,
                        and received my Full-Stack Web Development education from UC Berkeley. I specialize in both Front End and Back End JavaScript as well as writing programs in React and Node.js.
                        I have experience in designing database schemas for MySQL and MongoDB.
                        <br />
                        <br />
                        I am an avid outdoors person and love to design applications that have a positive impact on the World we live in. 
                        <br />I enjoy being a part of new teams and 
                        helping businesses get off the ground and running. 
                        <br />Feel free to reach out with anything!
                        <br/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

