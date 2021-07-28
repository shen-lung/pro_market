import React, { useRef } from 'react';

import { useHistory } from "react-router-dom";

import '../style/head_styles.scss';

export default function HeadComponent() {
    const refInputSearch = useRef(null)
    const history = useHistory();

    const handleSearchClick = () => {
        history.push(`/search/${refInputSearch.current.value}`);
        refInputSearch.current.value = ''
    }
    
    const handleHomeClick = () => {
        history.push('/');
    }

    const handleInputClick = (e) => {
        if(e.keyCode === 13) {
            history.push(`/search/${refInputSearch.current.value}`);
            refInputSearch.current.value = ''
        }
    }

    return (
        <div className="head">
            <div className="head-content">
                <img src="/src/images/Logo_ML.png" className="head--logo_image"  onClick={handleHomeClick} />
                <input
                    onKeyUp={handleInputClick}
                    ref={refInputSearch}
                    className="head__find-input"
                    type='text'
                    placeholder="Nunca dejes de buscar"
                />
                <span className="head--search_icon_section">
                    <img src="/src/images/ic_Search.png" className="head--search_image" onClick={handleSearchClick} />
                </span>
            </div>
        </div>
    );
}
 