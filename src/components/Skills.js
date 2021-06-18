import React from 'react'
import '../css/Skills.css'
import Progress from './Progress'

function Skills() {
    return (
        <div className="skills col-md-6 col-xs-12">
            <div className="line-text">
                <h4>My Skills</h4>
            </div>
            <br />
            <div className="skills-container">
                <div className="skills-container">
                    <Progress name="C++" value={95} delay={1100} />
                    <Progress name="Javascript" value={90} delay={1100} />
                    <Progress name="MERN Stack" value={95} delay={1100} />
                    <Progress name="Solidity" value={80} delay={1100} />
                    <Progress name="Blockchain Dev" value={80} delay={1100} />
                </div>
                <div className="skills-container">
                    <Progress name="Python" value={60} delay={1100} />
                    <Progress name="MySQL" value={95} delay={1100} />
                </div>
            </div>
        </div>
    )
}

export default Skills
