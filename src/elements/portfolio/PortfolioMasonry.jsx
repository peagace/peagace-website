import React, { Component } from "react";
import {Link} from "react-router-dom";
const PortfolioList = [
    // {
    //     image: 'image-9',
    //     category: '3D Interactive Website',
    //     title: 'IRBin',
    //     link: '/project/irbin'
    // },   
    {
        image: 'image-10',
        category: 'Art Direction & 3D Modelling',
        title: 'Só mais uma',
        link: '/project/somaisuma'
    },
    {
        image: 'image-3',
        category: 'Co-founder',
        title: 'NFTOYER',
        link: '/project/nftoyer'        
    },
    {
        image: 'image-6',
        category: 'Branding',
        title: 'PayGroup',
        link: '/project/paygroup'
    },
    {
        image: 'image-2',
        category: 'Art Direction + UI Design',
        title: 'Radioteraquiz',
        link: '/project/radioteraquiz'
    },
    {
        image: 'image-1',
        category: 'Co-founder',
        title: 'hokup co',
        link: '/project/hokupco'
    },
    {
        image: 'image-8',
        category: 'Art Direction & 3D Modelling',
        title: 'FMP x TELLA',
        link: '/project/fmpxtella'
    },
    {
        image: 'image-4',
        category: 'Branding',
        title: 'Comitando',
        link: '/project/comitando'
    },
   
]

class PortfolioMasonry extends Component{
    render(){
        const {column } = this.props;
        const list = PortfolioList.slice(0 , this.props.item);
        return(
            <React.Fragment>
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className="Tilt-inner">
                            <div className="portfolio">
                            <a href={value.link}>
                                <div className="thumbnail-inner">
                                    <div className={`thumbnail ${value.image}`}></div>
                                    <div className={`bg-blr-image ${value.image}`}></div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <p>{value.category}</p>
                                        <h4><a href={value.link}>{value.title}</a></h4>
                                        <div className="portfolio-button">
                                            <a className="rn-button-style--2 btn-outline" href={value.link} style={{letterSpacing:'0px', margin:'0px', padding:'10px 30px'}}>project details</a>
                                        </div>
                                    </div>
                                </div>
                                <Link className="link-overlay" to={value.link}></Link>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}               
            </React.Fragment>
        )
    }
}
export default PortfolioMasonry;