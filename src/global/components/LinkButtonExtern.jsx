import React from 'react';

import LinkButton from './LinkButton';

import './style/LinkButtonExtern.css';

class LinkButtonExtern extends React.Component
{
    render()
    {
        return (
            <LinkButton  className="LinkButtonExtern" href={this.props.href}><span></span>{this.props.children}</LinkButton>
        );
    }
}

export default LinkButtonExtern;