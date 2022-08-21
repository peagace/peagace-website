import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Art Direction",
        tab2 = "Branding",
        tab3 = "UI/UX Design",
        tab4 = "3D",
        tab5 = "Development";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                        <Tab>{tab5}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a style={{color:"white"}}>Creative thinking</a>
                                                    Planning and proejcting ideias for digital projects, with visual and creative experiences.
                                                </li>
                                                <li>
                                                    <a style={{color:"white"}}>Graphic Design</a>
                                                    Content design for social media and brand communication.
                                                </li>                                                
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a style={{color:"white"}}>Branding</a>
                                                    Complete visual and concept design for brands, companies and projects.                                                    
                                                </li>
                                                <li>
                                                    <a style={{color:"white"}}>Visual</a>
                                                    Logo, patterns, symbol and colors to distinct your brand from others.
                                                </li>                                                                                       
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a style={{color:"white"}}>Mobile</a>
                                                    UI and UX design and prototype of mobile apps.
                                                </li>
                                                <li>
                                                    <a style={{color:"white"}}>Web</a>
                                                    Web design with responsive layout, for desktop and mobile.
                                                </li>                                              
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a style={{color:"white"}}>Modelling and texturing</a>
                                                    Planning and proejcting ideias for digital projects, with visual and creative experiences.
                                                </li>
                                                <li>
                                                    <a style={{color:"white"}}>Render and animations</a>
                                                    Graphical and textual elements for social media and promote brand communication.
                                                </li>                                               
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a style={{color:"white"}}>React.JS</a>
                                                    Front-end development for websites.
                                                </li>
                                                <li>
                                                    <a style={{color:"white"}}>React Native</a>
                                                    Front-end development for mobile apps.
                                                </li>                                              
                                            </ul>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;