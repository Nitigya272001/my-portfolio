import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function AboutMe() {
    return (
        <div className="content col-md-6 col-xs-12">
            <div className="content-text">
                <div className="line-text">
                    <h4>About Me</h4>
                </div>
                <h4 style={{color: "white"}}>An enthusiastic and talented engineering fresher who is a self-starter and capable to use technical skills for the betterment.Capable of mastering new technologies.</h4>
                {/* <div className="separator" style={{paddingBottom : "5px"}}></div> */}
                <br />
                <br />
                <div className="line-text">
                    <h4>Personal Information</h4>
                </div>
                <div style={{textDecoration: 'none', color: "white"}}>
                        <h6><span class="title">Name : </span><span class="value">Nitigya Jain</span></h6>
                        <h6><span class="title">Age : </span><span class="value">19 Years</span></h6>
                        <h6><span class="title">Residence : </span><span class="value">Kota, Rajasthan</span></h6>
                        <h6><span class="title">Email : </span><span class="value">nitigyajain123456@gmail.com</span></h6>
                        <h6><span class="title">Phone : </span><span class="value">(+91) 7426876599</span></h6>
                </div>
                <div className="separator"></div>
                <br />
                <div className="social social_icons">
                    <a href="https://github.com/Nitigya272001" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social_icon" icon={faGithub} /></a>
                    <a href="https://linkedin.com/in/nitigya-jain" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social_icon" icon={faLinkedin} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="social_icon" icon={faInstagram} /></a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
