import React from 'react';

const ProductCard = (data) => {
    const { productData } = data
    const price = productData.currencySymbol + productData.price
    const isNew = productData.isNewProduct === 'new'
    const soldCount = productData.soldCount
    const soldText = soldCount > 1 ? `${soldCount} vendidos` : `${soldCount} vendido`
    const isNewText = isNew ? 'Nuevo - ' : ''
    const soldTextDescription = `${isNewText}${soldText}`

    return (
        <div className="product-content-data">
            <div className="product-content-result-image">
                <img src={productData.picture} className="product-image" />
            </div>
            <div className="product-description">
                <p className="product-sold-font-size">{soldTextDescription}</p>
                <p className="product-name-font-size product-first-name">{productData.title}</p>
                <p className="product-card-price-font-size">{price}</p>
                <button className="product-buy-button">Comprar</button>
            </div>
            <div className="product-description-section">
                <p className="product-description-title">Descripción del producto</p>
                <p className="product-description-text">{productData.description}</p>
            </div>
        </div>
    )
}

export default ProductCard;
