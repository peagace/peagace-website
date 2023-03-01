import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import Footer from "../component/footer/Footer";
import HeaderThree from "../component/header/HeaderThree";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaApple, FaAndroid, FaYoutube, FaSpotify, FaChevronRight } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import FooterTwo from "../component/footer/FooterTwo";
import HeaderFour from "../component/header/HeaderFour";

const SocialShare = [
    { Social: <FaSpotify />, link: 'https://open.spotify.com/track/3kgE3UsUs0rb84JE5kHheQ' },
    { Social: <FaApple />, link: 'https://music.apple.com/us/artist/fmp-x-tella/1551482229' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/fmpxtella/' },
    { Social: <FaYoutube />, link: 'https://www.youtube.com/watch?v=GZ0pWjrv8V0&ab_channel=FMPXTELLA' },   
]


class somaisuma extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="active-dark">
                    <PageHelmet pageTitle='Project: Só mais uma' />
                    <HeaderFour homeLink="/" logo="symbol-dark" color="color-black" />

                    {/* Start Portfolio Details */}
                    <div className="rn-portfolio-details pt--150 bg_color--5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner">
                                        <h2>Só mais uma</h2>
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
                                                <img src="/assets/images/blog/67.png" alt="Só mais uma - fmp x tella" />
                                            </div>

                                            <div className="thumbnail pt--20">
                                                <img src="/assets/images/blog/68.png" alt="Só mais uma - fmp x tella" />
                                            </div>

                                            {/* <div className="thumbnail pt--20">
                                                <img src="/assets/images/blog/69.png" alt="Só mais uma - fmp x tella" />
                                            </div> */}

                                            <div className="thumbnail pt--20">
                                                <video src="/assets/images/blog/video-somaisuma.mp4" width={'100%'} autoPlay playsInline muted alt="Só mais uma - fmp x tella" type="video/mp4" controls/>
                                            </div>

                                            <div className="thumbnail pt--20">
                                                <img src="/assets/images/blog/70.png" alt="Só mais uma - fmp x tella" />
                                            </div>

                                            <div className="thumbnail pt--20">
                                                <img src="/assets/images/blog/71.png" alt="Só mais uma - fmp x tella" />
                                            </div>


                                            <div className="thumbnail pt--20">
                                                <img src="/assets/images/blog/72.png" alt="Só mais uma - fmp x tella" />
                                            </div>

                                            <div className="thumbnail pt--20">
                                                <img src="/assets/images/blog/73.png" alt="Só mais uma - fmp x tella" />
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog Details */}

                    {/* Start Related Work */}
                    <div className="portfolio-related-work pb--120 bg_color--6">                        
                        <div className="container">
                            <div className="row">  
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="related-work text-right">
                                       
                                            <div  className="inner">
                                                <a className="rn-button-style--2 btn-outline" href={'/project/nftoyer'} style={{letterSpacing:'0px', margin:'0px', padding:'10px 30px'}}>
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

            </React.Fragment >
        )
    }
}
export default somaisuma;