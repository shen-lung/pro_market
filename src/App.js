import React from 'react';

import HeadComponent from './components/HeadComponent';
import ContentComponent from './components/ContentComponent';

import './style/app_style.scss';

function App() {
    return (
        <div>
            <HeadComponent />
            <ContentComponent />
        </div>
    );
}

export default App;
