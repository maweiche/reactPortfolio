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
                        <Card.Text id="bodyText">Check out logos I have designed below!</Card.Text>
                        <ControlledCarousel />
                </Card>
            </Container>
        </div>
    );
}