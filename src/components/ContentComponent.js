import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { searchProducts } from '../api/ApiService';

import SearchCard from '../ui/SearchCard'
import ProductPath from '../ui/ProductPath'

import '../style/content_styles.scss';

export default function ContentComponent() {
    const [searchData, handleData] = useState([])
    const {searchDataParam} = useParams()
  
    useEffect(() => {
        searchProducts(searchDataParam)
        .then(info => {
            handleData(info)
        })
    }, [searchDataParam])
    
    return (
        <div className="content">
            <div className="content__product-path">
                {searchData.length !== 0 && <ProductPath categoryData={searchData} />}
            </div>
            <div className="content__search">
                {searchData.length !== 0 && searchData.map((product, index) => (
                    <SearchCard key={index} searchData={product} />
                ))}
            </div>
        </div>
    );
}
