import React from 'react';

import {
    SEARCH_URL,
    SEARCH_PARAM,
    SEARCH_LIMIT_PARAM,
    GET_PRODUCT_URL,
    PRODUCT_PARAM,
} from '../constants.js'

export const searchProducts = (query) => {
    const searchData = SEARCH_PARAM.concat(query)
    const apiUrl = SEARCH_URL.concat(searchData, SEARCH_LIMIT_PARAM)
 
    return fetch(apiUrl, {
        method: 'GET',
    })
    .then(res => {
        return res.json();
    })
    .then((info) => {
        return info.data;
    })
}

export const getProduct = (productId) => {
    const productData = PRODUCT_PARAM.concat(productId)
    const apiUrl = GET_PRODUCT_URL.concat(productData)

    return fetch(apiUrl, {
        method: 'GET',
    })
    .then(res => {
        return res.json();
    })
    .then((info) => {
        return info.data;
    })
}
