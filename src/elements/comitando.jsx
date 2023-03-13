import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import HeaderThree from "../component/header/HeaderThree";
import { FaLinkedinIn, FaYoutube, FaMediumM, FaGithub, FaChevronRight } from "react-icons/fa";
import FooterTwo from "../component/footer/FooterTwo";
import HeaderFour from "../component/header/HeaderFour";

const SocialShare = [
    { Social: <FaYoutube />, link: 'https://www.youtube.com/comitando' },
    { Social: <FaMediumM />, link: 'https://medium.com/@juliofernandes_3738' },
    { Social: <FaGithub />, link: 'https://github.com/jjfernandes87' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/comitando/' },
]

class comitando extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="active-dark">
                <PageHelmet pageTitle='Project: Comitando_.' />
                <HeaderFour homeLink="/" logo="symbol-dark" color="color-black"/>
                    
                    {/* Start Portfolio Details */}
                    <div className="rn-portfolio-details pt--150 bg_color--5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner">
                                        <h2>Comitando_.</h2>
                                        <p className="subtitle" style={{ color: '#969696' }}>A Brazilian company focused on creating easy and accessible educational content about technology, mobile development, and software engineering in portuguese.</p>
                                        <div className="portfolio-view-list d-flex flex-wrap pt--20">
                                            <div className="port-view" style={{ marginRight: '30px' }}>
                                                <span style={{ color: '#969696' }}>Role</span>
                                                <h4>Brand Design</h4>
                                            </div>

                                            <div className="port-view">
                                                <span style={{ color: '#969696' }}>Area</span>
                                                <h4>Technology</h4>
                                            </div>
                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                                {SocialShare.map((val, i) => (
                                                    <li key={i}><a href={`${val.link}`} target="_blank" rel="noopener noreferrer">{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Details */}


                    <div className="rn-blog-details bg_color--6 pt--60" >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner-wrapper">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <img src="/assets/images/blog/61.png" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                                <img src="/assets/images/blog/62.jpg" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                            <img src="/assets/images/blog/63.jpg" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                            <img src="/assets/images/blog/64.jpg" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                            <img src="/assets/images/blog/65.png" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20 pb--80">
                                            <img src="/assets/images/blog/66.jpg" alt="Radioteraquiz image"/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Start Related Work */}
                    <div className="portfolio-related-work pb--120 bg_color--6">                        
                        <div className="container">
                            <div className="row">  
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="related-work text-right">
                                        
                                            <div  className="inner">
                                                <a className="rn-button-style--2 btn-outline" href={'/project/somaisuma'} style={{letterSpacing:'0px', margin:'0px', padding:'10px 30px'}}>
                                                    Next Project
                                                    <FaChevronRight className="ml--10"/>                                                   
                                                </a>
                                            </div>
                                       
                                    </div>
                                </div>                         
                            </div>
                        </div>
                    </div>
                 {/* End Related Work */}

                    
                </div>

            </React.Fragment>
        )
    }
}
export default comitando;