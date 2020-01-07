import React, { Component } from 'react';
import Conor from "./../../../static/assets/images/bio/conor.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class MyResume extends Component {
    constructor(props){
    super(props)

}



    render(){
        
        return(
            <div className="resume-wrapper">
            <div className="links">
                <h1><a href="/resume" target="_blank">Resume</a></h1>
                {/* <h1><a href="https://github.com/Sadiel-dev"target="_blank">Github</a></h1>
                <h1><a href="/https://www.linkedin.com/in/sadiel-almanza-205074197/"target="_blank">LinkedIn</a></h1> */}
            </div>

            <div className="introduction">
                <div className="picture-name">
                   <img style={{
                    backgroundImage: `url(${Conor})`
                    }}>
                    </img>

                    <h1>Sadiel Almanza</h1>

                </div>

                <span>
                    aDJFNAljvdnalsjdnals;jdblakshdblashdvlahsbdflkasbflkahbdlkahbdvlkhasbdvlhasbdlvkhabslkvhbalskh dvlkashbdvlkah vah vdlkashbvdlhaks
                </span>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Html</li>
                    <li>CSS3 & SCSS</li>
                    <li>Python</li>

                </ul>
            </div>

            <div>
                <h1>Experience</h1>
                <h2>Valet Parking</h2>
                <h3>North Miami Beach</h3>
                <h4>OCTOBER 2017 - CURRENT</h4>
                

            
                <h2>Burger King</h2>
                <h3>Hialeah Fl</h3>
                <h4>JUNE 2016 - SEPTEMBER 2016</h4>
                </div>

                <div>
                <h2>FootAction</h2>
                <h3>Hialeah Fl</h3>
                <h4>AUGUST 2018 - SEPTEMBER 2018 </h4>
                
        </div>

            <div className="Education">
                <h1>Education</h1>
                <ul>
                    <li>HighSchool Diploma from Hialeah Senior High</li>
                    <li>FullStack Web Dev from Bottega.net</li>
                </ul>
            </div>


            </div>
        )
    }
}

export default MyResume;
