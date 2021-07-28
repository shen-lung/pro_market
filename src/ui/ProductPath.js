import React from 'react';

const ProductPath = (data) => {
    const { categoryData } = data
    
    return (
        <span className="product-path-size">
            {categoryData[0].categories}
        </span>
    )
}

export default ProductPath;
