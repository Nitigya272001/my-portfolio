import React from 'react'
import '../css/Education.css'
import BaffleText from './BaffleText'
import EducationContainer from './EducationContainer'
import EducationInstitutes from './EducationInstitutes'

function Educations() {
    return (
        <div id="education" className="educations">
            <div className="top row" style={{maxHeight: "603.2px"}}>
                <div className="content">
                    <div className="col-md-12">
                        <div className="line-text">
                        <div className="separator"></div>
                        </div>
                        <div className="heading">
                            <BaffleText text="Education" revealDuration={500} revealDelay={500} />
                        </div>
                        <EducationContainer />
                    </div>
                </div>
            </div>
            <EducationInstitutes />
        </div>
    )
}

export default Educations
