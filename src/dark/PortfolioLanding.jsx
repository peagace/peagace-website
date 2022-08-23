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
import React, { Component, useRef, Suspense } from "react";
import { Canvas, Mesh, } from '@react-three/fiber'
import { PresentationControls, ContactShadows, Stage, Float, Loader, Environment, SpotLight } from '@react-three/drei'
import Model00 from './model00';

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
                        // <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}> 
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_color--6" key={index}> 
                            <div className="container">
                                <div className="row">

                                    <div className="col-lg-8">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h2 className="title">Art direction for digital projects.</h2>
                                            <h6 style={{color:'#969696', fontWeight:'500'}}>From visual brand design to softwares and technology.</h6>
                                        </div>                                    
                                    </div>

                                    <div className="col-md-4">
                                        <Suspense fallback={<Loader />}>
                                            <Canvas camera={{ fov: 20, near: 0.1, far: 200, position: [0, 5, 25] }} flat dpr={[1, 2]} >
                                                {/* <pointLight position={[-5, -1, 2]} color="#e8882a" intensity={1} />
                                                <pointLight position={[5, -6, -1]} color="#4f00a3" intensity={1} />                                                 */}
                                                <Model00 />       
                                                {/* <pointLight color="white" position={[1, -20, 0]} intensity={1} /> 
                                                <pointLight color="OrangeRed" position={[10, -5, 0]} intensity={1} />
                                                <pointLight color="LawnGreen" position={[-5, 1, -2]} intensity={1} />  */}

                                                <pointLight color="Indigo" position={[-5, 1, -2]} intensity={10} />
                                                <pointLight color="LawnGreen" position={[10, -5, 0]} intensity={10} />

                                               <directionalLight color="gray" position={[0, -1, -1]} intensity={1} />
                                               <directionalLight color="gray" position={[0, 0.1, -5]} intensity={1} />
                                               
                                            </Canvas>
                                        </Suspense>                                        
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
