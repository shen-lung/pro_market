import React from 'react';

const SearchCard = (data) => {
    const {searchData} = data
    const price = searchData.currencySymbol + searchData.price
    const unidadString = searchData.availableQuantity > 1 ? 'unidades disponibles' : 'unidad disponible'
    const availableQuantityText = `${searchData.availableQuantity} ${unidadString}`
    const productLink = `/items/${searchData.id}`

    return (
        <div className="content__search-data">
            <div className="content__search-result-image">
                <img src={searchData.picture} className="search-result-image" />
            </div>
            <div className="product-search-description">
                <div className="product-head">
                    <div className="product-price">
                        <span className="product-price-font-size">{price}</span>
                        {searchData.freeShipping && (
                            <img className="shipping-icon" src="/src/images/ic_shipping.png" width="18" height="18" />
                        )}
                    </div>
                    <div>
                        <span className="product-place-font-size">{searchData.place}</span>
                    </div>
                </div>
                <div className="product-description__title">
                    <a className="product-description__title-link" href={productLink}>
                        <p className="product-description-font-size">{searchData.title}</p>
                    </a>
                    <p className="product-description-font-size product-description-status">{availableQuantityText}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchCard;
