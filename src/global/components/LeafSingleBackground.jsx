import React from 'react';

import './style/LeafSingleBackground.css';

class LeafSingleBackground extends React.Component
{
    render()
    {
        return(
            <div className={`LeafSingleBackground ${this.props.className}`} ></div>
        );
    }
}

export default LeafSingleBackground;