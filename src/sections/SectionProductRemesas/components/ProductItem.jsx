import React from 'react';

import './style/ProductItem.css';

import LinkButtonExtern from '../../../global/components/LinkButtonExtern';

class ProductItem extends React.Component
{
    render()
    {
        return (
            <div className="ProductItem">
                <div className="Product">
                    <p>{this.props.price} EUR</p>     
                    <LinkButtonExtern  href={this.props.href}>Enviar</LinkButtonExtern>               
                </div>
            </div>
        );
    }

}

export default ProductItem;