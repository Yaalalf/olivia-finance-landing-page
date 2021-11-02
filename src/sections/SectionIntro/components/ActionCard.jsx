import React from 'react';
import './style/ActionCard.css';

class ActionCard extends React.Component
{
    render()
    {
        return (
            <div className={this.props.className}>
                <div className="Content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ActionCard;