import React from 'react';
import Skills from './images/Skillset.svg';
import MWResume from './files/MW2021.pdf'
import ControlledCarousel from '../components/Carousel'
import { Card, Container } from 'react-bootstrap'



export default function Resume() {
    return (
        <div>
            <Container >
                <Card id="p2">
                    <Card.Link id="resume" href={MWResume}  download="MWresume">Download My Resume</Card.Link>
                        
                        <Card.Img src={Skills} alt="skillset" id="skillset"/>
                        <h2>Check out logos I have designed below!</h2>
                        <ControlledCarousel />
                </Card>
            </Container>
        </div>
    );
}