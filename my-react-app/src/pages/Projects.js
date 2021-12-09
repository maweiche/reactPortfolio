import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import Weather from './images/weatherstill.png'
import Kanye from './images/MobileKanyeYoda.gif'
import PasswordG from './images/pwdstill.png'
import TechBlog from './images/TechBlog.png'
import Fitness from './images/FitnessTracker.png'
// import Tpg  from '.'
import '../App.css'

export default function Projects () {
    return (
        <Container className="cardContainer">
        <Row xs={1} lg="auto" className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <>
                <Col sm={8}>
                <Card>
                    <Card.Img href="https://maweiche.github.io/project_one/" variant="top" src={Kanye} />
                    <Card.Body>
                    <Card.Title>Dual API Quote Generator/Translator</Card.Title>
                    <Card.Text>
                        <a href="https://github.com/maweiche/project_one" className="fa fa-github" > </a>
                    </Card.Text>
                    </Card.Body>
                </Card>
              
                
                <Card>
                    <Card.Img href="https://stormy-crag-17205.herokuapp.com/" variant="top" src={TechBlog} />
                    <Card.Body>
                    <Card.Title>Tech Blog</Card.Title>
                    <Card.Text>
                        <a href="https://github.com/maweiche/techBlog" className="fa fa-github" > </a>
                    </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Img href="https://maweiche.github.io/weatherdash/" variant="top" src={Weather} />
                    <Card.Body>
                    <Card.Title>API Weather Dashboard</Card.Title>
                    <Card.Text>
                        <a href="https://github.com/maweiche/weatherdash" className="fa fa-github" > </a>
                    </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Img href="https://maweiche.github.io/password-generator/" variant="top" src={PasswordG} />
                    <Card.Body>
                    <Card.Title>JavaScript Password Generator</Card.Title>
                    <Card.Text>
                        <a href="https://github.com/maweiche/password-generator" className="fa fa-github" > </a>
                    </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Img href="https://tranquil-lake-00499.herokuapp.com/" variant="top" src={Fitness} />
                    <Card.Body>
                    <Card.Title>Fitness Tracker</Card.Title>
                    <Card.Text>
                        <a href="https://github.com/maweiche/fitnessTracker" className="fa fa-github" > </ a>
                    </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Img href="#" variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>###</Card.Title>
                    <Card.Text>
                        <a href="#" className="fa fa-github"> </a>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                </>
            ))}
        </Row>
        </Container>
        )
}
        {/* // <div class="row">
        //     <div class="card" id="cardContainer" >
        //         <div id="projects" class="card-body">
        //             <h2 class="card-title">Personal Projects</h2>
        //                 <p class="card-text">
        //                 Click a project's image to see it in or action or check out it's GitHub Repo by clicking the GitHub Icon!
        //                 </p>
                    
        //             <div id="p3" class="row">
        //                 <div class="card">
        //                     <a href="https://maweiche.github.io/project_one/"  >
        //                     <img id="p2" src={Kanye} alt="WebAPIdemo.gif" /></a>
        //                     <h6 id="text-block">
        //                         Dual API Quote Generator/Translator
        //                         <a href="https://github.com/maweiche/project_one" class="fa fa-github"> </a>
        //                     </h6>
        //                 </div>
      
                    //     <div  class="card">
                    //         <a href="https://stormy-crag-17205.herokuapp.com/"  >
                    //         <img id="p2" src={TechBlog} alt="TechBlog.png" /></a>
                    //         <h6 id="text-block">
                    //             Tech Blog
                    //             <a href="https://github.com/maweiche/techBlog" class="fa fa-github"> </a>
                    //         </h6>
                    //     </div>
                    // </div>
                
                    <div class="row">
                        <div  class="card">
                            <a href="https://maweiche.github.io/weatherdash/">
                            <img id="p2" src={Weather} alt="WeatherDashboard.gif" /></a>
                            <h6 id="text-block">
                                API Weather Dashboard
                                <a href="https://github.com/maweiche/weatherdash" class="fa fa-github"> </a>
                            </h6>
                        </div>
                 
                        <div  class="card">
                            <a href="https://maweiche.github.io/password-generator/">
                            <img id="p2" src={PasswordG} alt="PasswordGenerator.gif" /></a>
                            <h6 id="text-block">
                                JavaScript Password Generator
                                <a href="https://github.com/maweiche/password-generator" class="fa fa-github"> </a>
                            </h6>
                        </div>
                    </div>
 
                    <div class="row">
                        <div class="card">
                            <a href="https://tranquil-lake-00499.herokuapp.com/">
                            <img id="p2" src={Fitness} alt="Fitness Tracker" /></a>
                            <h6 id="text-block">
                                Fitness Tracker
                                <a href="https://github.com/maweiche/fitnessTracker" class="fa fa-github"> </a>
                            </h6>
                        </div>

                        <div class="card">
                            <a href="https://maweiche.github.io/password-generator/">
                            <img id="p2" src={Tpg} alt="Team Profile Generator" /></a>
                            <h6 id="text-block">
                                Team Profile Generator
                                <a href="https://github.com/maweiche/teamProfileGenerator" class="fa fa-github"> </a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

