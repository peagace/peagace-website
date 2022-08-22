import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock , FiUser , FiMessageCircle , FiHeart, FiCheckSquare, FiEye, FiLayers, FiCode, FiGlobe } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import HeaderThree from "../component/header/HeaderThree";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaApple, FaAndroid, FaChevronRight } from "react-icons/fa";
import FooterTwo from "../component/footer/FooterTwo";
import HeaderFour from "../component/header/HeaderFour";

const SocialShare = [
    { Social: <FiGlobe />, link: 'https://www.radioteraquiz.com.br/' },
    { Social: <FaApple />, link: 'https://apps.apple.com/us/app/radioteraquiz/id1603222290' },
    { Social: <FaAndroid />, link: 'https://play.google.com/store/apps/details?id=com.hokup.radioteraquiz' },
]

class radioteraquiz extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="active-dark">
                <PageHelmet pageTitle='Project: Radioteraquiz' />
                <HeaderFour homeLink="/" logo="symbol-dark" color="color-black"/>
                    
                    {/* Start Portfolio Details */}
                    <div className="rn-portfolio-details pt--150 bg_color--5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner">
                                        <h2>Radioteraquiz</h2>
                                        <p className="subtitle" style={{ color: '#969696' }}>A medical company that promotes educational content across the internet. This is one of our creations at <a href={'https://peagace.com/project/hokupco'} rel="noopener noreferrer">hokup co.,</a> where we designed and executed the entire project, from Brand and UI Design to Mobile App Development.</p>
                                        <div className="portfolio-view-list d-flex flex-wrap pt--20">
                                            <div className="port-view" style={{ marginRight: '30px' }}>
                                                <span style={{ color: '#969696' }}>Role</span>
                                                <h4>Art director</h4>
                                            </div>

                                            <div className="port-view">
                                                <span style={{ color: '#969696' }}>Area</span>
                                                <h4>Health and technology</h4>
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

                     {/* Start Blog Details */}
                     <div className="rn-blog-details bg_color--6 pt--60" >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner-wrapper">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <img src="/assets/images/blog/31.png" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                                <img src="/assets/images/blog/32.png" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                            <img src="/assets/images/blog/33.png" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                            <img src="/assets/images/blog/34.png" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                            <img src="/assets/images/blog/35.png" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                            <img src="/assets/images/blog/36.png" alt="Radioteraquiz image"/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                            <img src="/assets/images/blog/37.png" alt="Radioteraquiz image"/>
                                            </div> 

                                            <div className="thumbnail pt--20  pb--80">
                                            <img src="/assets/images/blog/38.png" alt="Radioteraquiz image"/>
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
                                        <a href="/project/paygroup">
                                            <div  className="inner">
                                                <a className="rn-button-style--2 btn-outline" href={'/project/hokupco'} style={{letterSpacing:'0px', margin:'0px', padding:'10px 30px'}}>
                                                    Next Project
                                                    <FaChevronRight className="ml--10"/>                                                   
                                                </a>
                                            </div>
                                        </a>
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
export default radioteraquiz;