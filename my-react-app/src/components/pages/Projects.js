import React from 'react';

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
                            <img src="assets/images/Mobile Kanye Yoda.gif" alt="Web API demo gif" /></a>
                            <h6 id="text-block">Dual API Quote Generator/Translator</h6>
                        </div>
                    </div>
                    {/* <!-- Project 2 --> */}
                    <div class="row">
                        <div id="p2" class="card">
                            <a href="https://maweiche.github.io/weatherdash/">
                            <img src="assets/images/Weather Dash.gif" alt="Weather Dashboard gif" /></a>
                            <h6 id="text-block">API Weather Dashboard</h6>
                        </div>
                    {/* <!-- Project 3 --> */}
                        <div id ="p3" class="card">
                            <a href="https://maweiche.github.io/password-generator/">
                            <img src="assets/images/Password Generator.gif" alt="Password Generator gif" /></a>
                            <h6 id="text-block">JavaScript Password Generator</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}