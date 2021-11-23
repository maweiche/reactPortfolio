import React from 'react';
import Skills from './images/Skillset.svg';
import MWResume from './files/MW2021.pdf'



export default function Resume() {
    return (
        <div class="card" id="cardContainer" >
            <img src={Skills} alt="skillset" id="skillset"/>
            <a id="resume" href={MWResume}  download="MWresume"><h2>Download My Resume</h2></a>
        </div>
    );
}