import React from 'react';

import './style/LeafBackground.css';

class LeafBackground extends React.Component
{
    render()
    {
        return(
            <div className={`LeafBackground ${this.props.className}`} ></div>
        );
    }
}

export default LeafBackground;