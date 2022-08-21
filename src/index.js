// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

import DarkPortfolioLanding from './dark/PortfolioLanding';

import hokupco from "./elements/hokupco";
import nftoyer from "./elements/nftoyer";
import comittando from "./elements/comittando";
import radioteraquiz from "./elements/radioteraquiz";
import awesomegames from "./elements/awesomegames";
import paygroup from "./elements/paygroup";
import pepsitwistrun from "./elements/pepsitwistrun";
import fmpxtella from "./elements/fmpxtella";

import error404 from "./elements/error404";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import FooterTwo from './component/footer/FooterTwo';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkPortfolioLanding}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project/hokupco`} component={hokupco}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project/radioteraquiz`} component={radioteraquiz}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project/nftoyer`} component={nftoyer}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project/comittando`} component={comittando}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project/pepsitwistrun`} component={pepsitwistrun}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project/paygroup`} component={paygroup}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project/awesomegames`} component={awesomegames}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/project/fmpxtella`} component={fmpxtella}/>                        
                        <Route path={`${process.env.PUBLIC_URL}/`} component={DarkPortfolioLanding}/>
                    </Switch>
                </PageScrollTop>
                <FooterTwo/>                
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();