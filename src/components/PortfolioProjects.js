import React from 'react'
import PortfolioProject from './PortfolioProject'
import audspire from '../resources/audspire.png'
import dekhrekh from '../resources/dekhrekh.png'
import autoadmit from '../resources/autoadmit.png'

function PortfolioProjects() {
    return (
        <div className="recent-works col-md-10 col-xs-12">
            <div className="content">
                <div className="portfolio_container row" style={{maxHeight: "603.2px"}}>
                    <PortfolioProject title="audSPIRE" image={audspire} url="https://audspire.com/" />
                    <PortfolioProject title="Dekh Rekh" image={dekhrekh} url="https://github.com/Nitigya272001/dekh-rekh" />
                    <PortfolioProject title="AutoAdmit" image={autoadmit} url="https://github.com/Nitigya272001/Auto-Admit" />
                    <PortfolioProject title="Coderita" image={"https://picsum.photos/200/300"} url="http://coderita35.herokuapp.com/" />
                    <PortfolioProject title="Facebook Clone" image={"https://picsum.photos/200/300"} url="https://facebook-clone-c25a5.web.app/" />
                    
                </div>
            </div>
        </div>
    )
}

export default PortfolioProjects
