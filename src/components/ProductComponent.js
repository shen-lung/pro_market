import React, { useState, useEffect } from 'react';

import '../style/product_styles.scss';

export default function ProductComponent() {
    
    return (
        <div className="content">
            <div className="content__product-path">
                <span className="product-path-size">
                    Electronica, Audio y Video > iPod > Reproductores > iPod touch > <strong>32 GB</strong>
                </span>
            </div>
            <div className="product-content">
                <div className="product-content-data">
                    <div className="product-content-result-image">
                        <img src="/src/images/ipod_product.jpg" className="product-image" />
                    </div>
                    <div className="product-description">
                        <p className="product-sold-font-size">Nuevo - 234 vendidos</p>
                        <p className="product-name-font-size product-first-name">Deco Reverse</p>
                        <p className="product-name-font-size product-second-name">Sombrero Oxford</p>
                        <p className="product-card-price-font-size">$ 1.980</p>
                        <button className="product-buy-button">Comprar</button>
                    </div>
                    <div className="product-description-section">
                        <p className="product-description-title">Descripción del producto</p>
                        <p className="product-description-text">Filtro híbrido IR. Iluminación posterior. Estabilización automática de imagen. HDR para fotos. Control de exposición. Fotos panorámicas (hasta 43 MP). Modo ráfaga. Enfoque con un toque. Geoetiquetado de fotos a través de Wi–Fi. Modo temporizador. Captura de imagen en formatos HEIF y JPEG
Grabación de video HD de 1080p (30 cps). Enfoque con un toque mientras graba. Video en cámara lenta (120 cps). Video en cámara rápida. Estabilización cinemática de video. Zoom de 3x. Geoetiquetado de videos a través de Wi-Fi. Grabación de video en formatos HEVC y H.264</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
