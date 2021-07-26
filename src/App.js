import React from 'react';

import HeadComponent from './components/HeadComponent';
import ContentComponent from './components/ContentComponent';
import ProductComponent from './components/ProductComponent';

import './style/app_style.scss';

function App() {
    return (
        <div>
            <HeadComponent />
            <ContentComponent />
            <ProductComponent />
        </div>
    );
}

export default App;
