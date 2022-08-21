import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import PortfolioMasonry from '../elements/portfolio/PortfolioMasonry';

const SlideList = [
    {
        textPosition: 'text-left',
        category: "I'M PEAGACE",
    }
]
const PortfolioLanding = () => {
    let title = 'About',
        description = 'Art Director with over 7 years of experience with Branding, UI/UX design for digital projects, 3D modeling and animation, Game Design, and JavaScript Front-end Development for apps and websites.';
    const PostList = BlogContent.slice(0 , 3);
    return (
        <div className="active-dark">
            <Helmet pageTitle="home" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">ART DIRECTION<h2> FOR DIGITAL PROJECTS.</h2></h1>                                      
                                            
                                                                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--6">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-8.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            {/* End About Area */}

           {/* Start portfolio Area  */}
           <div id="projects" className="fix">
           <div className="rn-portfolio-area bg_color--6 ptb--20">                    
                    <div className="wrapper plr--30">
                        <div className="row">
                            <PortfolioMasonry item="9" column="col-lg-6 col-md-6 col-sm-6 col-12 portfolio-tilthover" />
                        </div>                       
                    </div>
                </div>
             </div>
            {/* End portfolio Area  */}          


            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--180 bg_color--6">
                    <ContactThree/>
                </div>
            </div>
            {/* End COntact Area */} 
            
        </div>
    )
}

export default PortfolioLanding;
