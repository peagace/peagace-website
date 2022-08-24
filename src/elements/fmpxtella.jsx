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
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaApple, FaAndroid, FaYoutube, FaSpotify, FaChevronRight } from "react-icons/fa";
import FooterTwo from "../component/footer/FooterTwo";
import HeaderFour from "../component/header/HeaderFour";

const SocialShare = [
    { Social: <FaSpotify />, link: 'https://open.spotify.com/artist/5Pj9fMzcocDNWzC3ko3Upb' },
    { Social: <FaApple />, link: 'https://music.apple.com/us/artist/fmp-x-tella/1551482229' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/fmpxtella/' },
    { Social: <FaYoutube />, link: 'https://www.youtube.com/channel/UCSE3wzgEd4sdx9ig36ARn7w' },   
]

class fmpxtella extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
            <div className="active-dark">
            <PageHelmet pageTitle='Project: FMP x TELLA' />
            <HeaderFour homeLink="/" logo="symbol-dark" color="color-black"/>
                
                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details pt--150 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h2>FMP x TELLA</h2>
                                    <p className="subtitle" style={{ color: '#969696' }}>FMP and TELLA tela are music artists that sings, writes, record and produce trap and hip-hop songs for Spotify and Apple Music.</p>
                                    <div className="portfolio-view-list d-flex flex-wrap pt--20">
                                        <div className="port-view" style={{ marginRight: '30px' }}>
                                            <span style={{ color: '#969696' }}>Role</span>
                                            <h4>Art direction & 3D Modelling</h4>
                                        </div>

                                        <div className="port-view">
                                            <span style={{ color: '#969696' }}>Area</span>
                                            <h4>Music</h4>
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
                                            <img src="/assets/images/blog/51.jpg" alt="FMPxTELLA image"/>
                                        </div>                                       

                                        <div className="thumbnail pt--20">
                                            <img src="/assets/images/blog/52.png" alt="FMPxTELLA  image"/>
                                        </div>

                                        <div className="video-wrapper position-relative pt--20">
                                            <div className="thumbnail">
                                                <img src="/assets/images/blog/53.jpg" alt="FMPxTELLA  Images"/>
                                            </div>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='VHgWv1mDNB0' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        
                                        <div className="thumbnail pt--20">
                                        <img src="/assets/images/blog/54.png" alt="FMPxTELLA  image"/>
                                        </div>

                                        <div className="thumbnail pt--20 pb--80">
                                        <img src="/assets/images/blog/55.jpg" alt="FMPxTELLA  image"/>
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
                                                <a className="rn-button-style--2 btn-outline" href={'/project/comittando'} style={{letterSpacing:'0px', margin:'0px', padding:'10px 30px'}}>
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
export default fmpxtella;