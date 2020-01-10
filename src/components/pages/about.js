import React from 'react';
import profilePicture from "../../../static/assets/images/bio/About.png"




export default function() {
    return(
        <div className="content-page-wrapper">
        
        <div className="left-column"
        style={{
            background:"url(" + profilePicture + ") no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center",
        }}
        />
        <div className="right-column">
            
                <p>Hello My name is Sadiel Almanza and I am a Full Stack Web Developer,
                 I am very proud of what I accomplished so far by creating this portfolio and the other small apps.
                 If given the opportunity to start working full time on code i feel like i can accomplish many great things under the right guidance and with the right team. I am capable of learning any language necessary and become
                 successful with it. More than grateful to have learned the ability of creating applications, but i know is just the beginning of an endless journey.
                </p>

                <div className="Links">
                   <div className="github"><a href="#">Github</a></div> 
                    <div className="linkedin"><a href="#">LinkedIn</a></div>
                </div>
        </div>

    </div>
    )
}
