import React from 'react';

import HeadComponent from './components/HeadComponent';
import ContentComponent from './components/ContentComponent';
import ProductComponent from './components/ProductComponent';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import './style/app_style.scss';

function App() {
    return (
        <Router>
            <div>
                <HeadComponent />
                <Switch>
                    <Route path="/search/:searchDataParam" component={ContentComponent} />
                    <Route path="/items/:productId" component={ProductComponent} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
