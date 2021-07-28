const express = require('express');
const got = require('got');

const app = express()
const port = process.env.PORT || 3000

const currencySimbols = {
    ARS: '$',
}

const getSearchFilteredData = (rangeData, categoriesData) => {
    const filteredData = [];
    const productCategorie = getCategoriesData(categoriesData);

    rangeData.map((product) => {
        filteredData.push({
            id: product.id,
            picture: product.thumbnail,
            title: product.title,
            price: product.price,
            currencySymbol: getCurrencySymbol(product.currency_id),
            place: product.address.state_name,
            freeShipping: product.shipping.free_shipping,
            availableQuantity: product.available_quantity,
            categories: productCategorie,
        })
    });

    return filteredData;
}

const getProductFilteredData = (productData, descriptionData, categoriesData) => {
    const productCategorie = getCategoriesData(categoriesData);

    return [{
        id: productData.id,
        picture: productData.pictures[0].url,
        title: productData.title,
        soldCount: productData.sold_quantity,
        isNewProduct: productData.condition,
        price: productData.price,
        currencySymbol: getCurrencySymbol(productData.currency_id),
        description: descriptionData.plain_text,
        categories: productCategorie,
    }]
}

const getCurrencySymbol = (currency) => {
    return currencySimbols[currency];
}

const getCategoriesData = (categoriesData) => {
    const categories =  categoriesData.path_from_root;
    let description = '';

    for (let cat = 0; cat < categories.length; cat++) {
        description += `${categories[cat].name} `
        if (cat !== categories.length - 1) {
            description += '> ';
        }
    }

    return description;
}

app.get('/api/search', (req, res) => {
    const { q, limit } = req.query;

    (async () => {
        const response = await got(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`);
        const data = JSON.parse(response.body);
        const rangeData = data.results.slice(0, limit);
        const categoriesResponse = await got(`https://api.mercadolibre.com/categories/${rangeData[0].category_id}`);
        const categoriesData = JSON.parse(categoriesResponse.body);
        const filteredSearchData = getSearchFilteredData(rangeData, categoriesData);
        
        res.send(JSON.stringify({data: filteredSearchData}));
    })();
})

app.get('/api/items', (req, res) => {
    const { id } = req.query;

    (async () => {
        const productResponse = await got(`https://api.mercadolibre.com/items/${id}`);
        const productDescResponse = await got(`https://api.mercadolibre.com/items/${id}/description`);
        const productData = JSON.parse(productResponse.body);
        const descriptionData = JSON.parse(productDescResponse.body);
        const categoriesResponse = await got(`https://api.mercadolibre.com/categories/${productData.category_id}`);
        const categoriesData = JSON.parse(categoriesResponse.body);
        const filteredProductData = getProductFilteredData(productData, descriptionData, categoriesData);
        
        res.send(JSON.stringify({data: filteredProductData}));
    })();
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
