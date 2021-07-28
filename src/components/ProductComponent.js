import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getProduct } from '../api/ApiService';

import ProductPath from '../ui/ProductPath'
import ProductCard from '../ui/ProductCard'

import '../style/product_styles.scss';

export default function ProductComponent() {
    const [productData, setProductData] = useState([])
    let {productId} = useParams()

    useEffect(() => {
        getProduct(productId)
        .then(data => {
            setProductData(data)
        })
    }, [productId])
    
    return (
        <div className="content">
            <div className="content__product-path">
                {productData.length !== 0 && <ProductPath categoryData={productData} />}
            </div>
            <div className="product-content">
                {productData.length !== 0 && <ProductCard productData={productData[0]}/>}
            </div>
        </div>
    );
}
