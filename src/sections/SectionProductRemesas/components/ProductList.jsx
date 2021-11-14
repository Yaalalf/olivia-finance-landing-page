import React from 'react';

import './style/ProductList.css';

import ProductItem from './ProductItem';

class ProductList extends React.Component
{
    products = [{price : 250,href : "https://buy.stripe.com/3csdTR3YD48J6yc8wD"},
                {price : 200,href : "https://buy.stripe.com/3csbLJan1bBb6yc006"},
                {price : 150,href : "https://buy.stripe.com/aEU0312UzbBbg8M9AF"},
                {price : 100,href : "https://buy.stripe.com/4gw6rpbr548J5u86os"},
                {price : 50,href : "https://buy.stripe.com/blY4jh8eT8oZaOs8wz"},
                {price : 25,href : "https://buy.stripe.com/28o2b9gLpgVvf4laEF"},
                {price : 20,href : "https://buy.stripe.com/dR66rpeDh48JbSw3ce"},
                {price : 10,href : "https://buy.stripe.com/8wM03152H7kVbSw9Al"},
                {price : 5,href : "https://buy.stripe.com/aEUdTR0Mr48J5u8blR"}];
    
    render()
    {
        return (
            <div className="ProductList">
                {this.products.map((element)=>
                    <ProductItem key={element.href} price={element.price} href={element.href}/>
                )}
            </div>
        );
    }

}

export default ProductList;