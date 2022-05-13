import {DevPortalProvider} from '@stoplight/elements-dev-portal';
import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import {Navigation} from './components/Navigation';
import {NotFound} from './components/NotFound';
import {StoplightProjectDocs} from './components/StoplightProject';
import {MaximoAPI} from "./components/MaximoAPI";
import {AventonAPI} from "./components/AventonAPI";
import {ChileAPI} from "./components/ChileLegacyAPI";
import {TonnyAPI} from "./components/NintendoAPI";
import { ChileFifoAPI } from "./components/ChileFifoAPI";
import { PeruAPI } from "./components/PeruLegacyApi";
import {ShopifyAPI} from "./components/ShopifyAPI";

class App extends Component {
    render() {
        return (
            <DevPortalProvider>
                <BrowserRouter>
                    <div className="app-container">
                        <header>
                            <Navigation/>
                        </header>
                        <main className="main-content">
                            <Switch>
                                <Route exact path="/">
                                    <Redirect to="/tonny"/>
                                </Route>
                                <Route path="/maximo" component={MaximoAPI}/>
                                <Route path="/aventon" component={AventonAPI}/>
                                <Route path="/chile" component={ChileAPI}/>
                                <Route path="/fifo" component={ChileFifoAPI}/>
                                <Route path="/tonny" component={TonnyAPI}/>
                                <Route path="/peru" component={PeruAPI}/>
                                <Route path="/shopify" component={ShopifyAPI}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </main>
                    </div>
                </BrowserRouter>
            </DevPortalProvider>
        );
    }
}

export default App;
