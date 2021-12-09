import React from 'react';
import { Card, Container, Col, Row, Body } from 'react-bootstrap';
import Weather from './images/weatherstill.png'
import Kanye from './images/MobileKanyeYoda.gif'
import PasswordG from './images/pwdstill.png'
import TechBlog from './images/TechBlog.png'
import Fitness from './images/FitnessTracker.png'
// import Tpg  from '.'


export default function Projects () {
    return (
        <div>
        <Container className="cardContainer" >
        <Row className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <>
                <Col >
                    <Card id="p2" style={{ width: '32rem',  }}>
                        <a href="https://maweiche.github.io/project_one/" >
                            <Card.Img variant="top" src={Kanye} />
                        </a>
                        <Card.Body>
                            <Card.Title id="name">Dual API Quote Generator/Translator<a href="https://github.com/maweiche/project_one" className="fa fa-github" > </a></Card.Title>
                        </Card.Body>  
                    </Card>
                </Col>
                
                <Col >
                    <Card id="p2" style={{ width: '32rem' }}>
                        <a href="https://stormy-crag-17205.herokuapp.com/" >
                            <Card.Img variant="top" src={TechBlog} />
                        </a>
                        <Card.Body>
                            <Card.Title id="name">Tech Blog<a href="https://github.com/maweiche/techBlog" className="fa fa-github" > </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card id="p2" style={{ width: '32rem' }}>
                        <a href="https://maweiche.github.io/weatherdash/">
                            <Card.Img  variant="top" src={Weather} />
                        </a>
                        <Card.Body>
                            <Card.Title id="name">API Weather Dashboard<a href="https://github.com/maweiche/weatherdash" className="fa fa-github" > </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card id="p2"  style={{ width: '32rem' }}>
                        <a href="https://maweiche.github.io/password-generator/">
                            <Card.Img  variant="top" src={PasswordG} />
                        </a>
                        <Card.Body>
                            <Card.Title id="name">JavaScript Password Generator<a href="https://github.com/maweiche/password-generator" className="fa fa-github" > </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card  id="p2" style={{ width: '32rem' }}>
                        <a href="https://tranquil-lake-00499.herokuapp.com/">
                            <Card.Img  variant="top" src={Fitness} />
                        </a>
                        <Card.Body>
                            <Card.Title id="name">Fitness Tracker<a href="https://github.com/maweiche/fitnessTracker" className="fa fa-github" > </ a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col >
                    <Card id="p2"  style={{ width: '32rem' }}>
                        <a href="#">
                            <Card.Img  variant="top" src="holder.js/100px160" />
                        </a>
                        <Card.Body>
                            <Card.Title id="name">###<a href="#" className="fa fa-github"> </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                </>
            ))}
            </Row>
           </Container>
        </div>
        )
}