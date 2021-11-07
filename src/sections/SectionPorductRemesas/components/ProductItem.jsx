import React from 'react';

import './style/ProductItem.css';

class ProductItem extends React.Component
{
    render()
    {
        return (
            <div key={this.props.key} className="ProductItem">
                <div className="Price"><p>{this.props.price} EUR</p></div>
                <a href={this.props.href}>Encargar</a>
            </div>
        );
    }

}

export default ProductItem;