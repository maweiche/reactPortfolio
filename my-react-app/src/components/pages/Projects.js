import React from 'react';
import Weather from './images/WeatherDash.gif'
import Kanye from './images/MobileKanyeYoda.gif'
import PasswordG from './images/PasswordGenerator.gif'

export default function Projects () {
    return (
        <div class="row">
            <div class="card" id="cardContainer" >
                <div id="projects" class="card-body">
                    <h5 class="card-title">Personal Projects</h5>
                        <p class="card-text">
                        Brief overview of whats listed
                        </p>
                    {/* <!-- Project 1 --> */}
                    <div class="row">
                        <div id="p1" class="card">
                            <a href="https://maweiche.github.io/project_one/"  >
                            <img src={Kanye} alt="WebAPIdemo.gif" /></a>
                            <h6 id="text-block">Dual API Quote Generator/Translator</h6>
                        </div>
                    </div>
                    {/* <!-- Project 2 --> */}
                    <div class="row">
                        <div id="p2" class="card">
                            <a href="https://maweiche.github.io/weatherdash/">
                            <img src={Weather} alt="WeatherDashboard.gif" /></a>
                            <h6 id="text-block">API Weather Dashboard</h6>
                        </div>
                    {/* <!-- Project 3 --> */}
                        <div id ="p3" class="card">
                            <a href="https://maweiche.github.io/password-generator/">
                            <img src={PasswordG} alt="PasswordGenerator.gif" /></a>
                            <h6 id="text-block">JavaScript Password Generator</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}