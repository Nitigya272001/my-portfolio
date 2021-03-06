import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import EducationStat from './EducationStat'
import nitj from '../resources/nitj.png'
import avs from '../resources/avs.png'

function EducationContainer() {
    const settings = {
        dots: true,
        swipe: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        loop: true,
    }

    return (
        <div className="educations_container" style={{minHeight: "452.4px"}}>
            <div className="container">
                <div className="quote">
                    <div className="animated fadeIn slow" style={{opacity: 1, height: "auto"}}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="svg-inline--fa fa-quote-left fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                    </div>
                </div>
                <div className="animated fadeIn slow" style={{opacity: 1, height: "auto"}}>
                    <Slider {...settings}>
                        <EducationStat 
                            instituteName="Dr. B.R Ambedkar NIT Jalandhar"
                            educationContent="2019-2023"
                            instituteImg={nitj}
                            degree="Bachelor of Technology (B.Tech)"
                            stream="Computer Science Engineering"
                        />
                        <EducationStat 
                            instituteName="A.V.S. Public Sr. Sec. School, Bijoliya"
                            educationContent="2018-2019"
                            instituteImg={avs}
                            degree="Class 12th"
                            stream="PCM"
                        />
                        <EducationStat 
                            instituteName="A.V.S. Public Sr. Sec. School, Bijoliya"
                            educationContent="2016-2017"
                            instituteImg={avs}
                            degree="Class 10th"
                            stream="Senior Secondary Education"
                        />
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default EducationContainer
