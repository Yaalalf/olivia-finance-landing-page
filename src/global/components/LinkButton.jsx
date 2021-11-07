import React from 'react';

import './style/LinkButton.css';

class LinkButton extends React.Component
{
    render()
    {
        return (
            <a  className={`LinkButton ${this.props.className}`} href={this.props.href}>{this.props.children}</a>
        );
    }
}

export default LinkButton;