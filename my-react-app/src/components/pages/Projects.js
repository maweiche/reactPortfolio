import React from 'react';
import Weather from './images/weatherstill.png'
import Kanye from './images/MobileKanyeYoda.gif'
import PasswordG from './images/pwdstill.png'
import TechBlog from './images/TechBlog.png'
import Fitness from './images/FitnessTracker.png'
import Tpg  from './images/Tpg.png'

export default function Projects () {
    return (
        <div class="row">
            <div class="card" id="cardContainer" >
                <div id="projects" class="card-body">
                    <h2 class="card-title">Personal Projects</h2>
                        <p class="card-text">
                        Click a project's image to see it in or action or check out it's GitHub Repo by clicking the GitHub Icon!
                        </p>
                    {/* <!-- Project 1 --> */}
                    <div id="p3" class="row">
                        <div class="card">
                            <a href="https://maweiche.github.io/project_one/"  >
                            <img id="p2" src={Kanye} alt="WebAPIdemo.gif" /></a>
                            <h6 id="text-block">
                                Dual API Quote Generator/Translator
                                <a href="https://github.com/maweiche/project_one" class="fa fa-github"> </a>
                            </h6>
                        </div>
                        {/* Project 2 */}
                        <div  class="card">
                            <a href="https://stormy-crag-17205.herokuapp.com/"  >
                            <img id="p2" src={TechBlog} alt="TechBlog.png" /></a>
                            <h6 id="text-block">
                                Tech Blog
                                <a href="https://github.com/maweiche/techBlog" class="fa fa-github"> </a>
                            </h6>
                        </div>
                    </div>
                    {/* <!-- Project 3 --> */}
                    <div class="row">
                        <div  class="card">
                            <a href="https://maweiche.github.io/weatherdash/">
                            <img id="p2" src={Weather} alt="WeatherDashboard.gif" /></a>
                            <h6 id="text-block">
                                API Weather Dashboard
                                <a href="https://github.com/maweiche/weatherdash" class="fa fa-github"> </a>
                            </h6>
                        </div>
                    {/* <!-- Project 4 --> */}
                        <div  class="card">
                            <a href="https://maweiche.github.io/password-generator/">
                            <img id="p2" src={PasswordG} alt="PasswordGenerator.gif" /></a>
                            <h6 id="text-block">
                                JavaScript Password Generator
                                <a href="https://github.com/maweiche/password-generator" class="fa fa-github"> </a>
                            </h6>
                        </div>
                    </div>
                    {/* Project 5 */}
                    <div class="row">
                        <div class="card">
                            <a href="https://tranquil-lake-00499.herokuapp.com/">
                            <img id="p2" src={Fitness} alt="Fitness Tracker" /></a>
                            <h6 id="text-block">
                                Fitness Tracker
                                <a href="https://github.com/maweiche/fitnessTracker" class="fa fa-github"> </a>
                            </h6>
                        </div>
                    {/* <!-- Project 6 --> */}
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
        </div>

    )
}