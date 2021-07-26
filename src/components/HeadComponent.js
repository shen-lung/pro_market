import React, { useState, useEffect } from 'react';

import '../style/head_styles.scss';

export default function HeadComponent() {
    
    return (
        <div className="head">
            <div className="head-content">
                <img src="/src/images/Logo_ML.png" className="head--logo_image" />
                <input className="head__find-input" type='text' placeholder="Nunca dejes de buscar" />
                <span className="head--search_icon_section">
                    <img src="/src/images/ic_Search.png" className="head--search_image" />
                </span>
            </div>
        </div>
    );
}
 