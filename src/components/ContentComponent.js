import React, { useState, useEffect } from 'react';

import '../style/content_styles.scss';

export default function ContentComponent() {
    
    return (
        <div className="content">
            <div className="content__product-path">
                <span className="product-path-size">
                    Electronica, Audio y Video > iPod > Reproductores > iPod touch > <strong>32 GB</strong>
                </span>
            </div>
            <div className="content__search">
                <div className="content__search-data">
                    <div className="content__search-result-image">
                        <img src="/src/images/ipod.jpg" className="search-result-image" />
                    </div>
                    <div className="product-search-description">
                        <div className="product-head">
                            <div className="product-price">
                                <span className="product-price-font-size">$1.980</span>
                                <img className="shipping-icon" src="/src/images/ic_shipping.png" width="18" height="18" />
                            </div>
                            <div>
                                <span className="product-place-font-size">Capital Federal</span>
                            </div>
                        </div>
                        <div className="product-description__title">
                            <p className="product-description-font-size">Apple Ipod Touch 5g 16gb Negro Igual a Nuevo</p>
                            <p className="product-description-font-size product-description-status">Completo Unico!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
