import React, { Component } from 'react';
import Product from './Product';

const products = [
    { id: 1, name: 'breef' },
    { id: 2, name: 'pork' },
    { id: 3, name: 'lamb' },
    { id: 4, name: 'checken' },
    { id: 5, name: 'meat' },
];

const ProductList = () => (
    <ul>
        {products.map(product => (
            <Product key={product.id}
                {...product}
            />
        ))}
    </ul>
);

export default ProductList;