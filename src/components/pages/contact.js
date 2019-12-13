import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePicture from "../../../static/assets/images/contact/login.jpg"

export default function() {
    return(
        <div className="content-page-wrapper">
        
        <div className="left-column"
        style={{
            background:"url(" + profilePicture + ") no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundColor:"black"
        }}
        />
        <div className="right-column">
            <div className="bullet-points">
                <div className="contact-info">
                    <div className="icon">
                    <FontAwesomeIcon icon="phone-volume"/>
                    
                    </div>
                    <div className="text">786-395-3860</div>
                </div>
            </div>
            <div className="bullet-points">
                <div className="contact-info">
                    <div className="icon">
                    <FontAwesomeIcon icon="envelope-open-text"/>
                    </div>
                    <div className="text">almanza_sadiel@yahoo.com</div>
                </div>
            </div>
            <div className="bullet-points">
                <div className="contact-info">
                    <div className="icon">
                    <FontAwesomeIcon icon="map-marker-alt"/>
                    
                    </div>
                    <div className="text">Miami, FL</div>
                </div>
            </div>
        </div>
        </div>
    )
}