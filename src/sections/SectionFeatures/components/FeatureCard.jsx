import React from 'react';
import './style/FeatureCard.css';

class FeatureCard extends React.Component
{
    render()
    {
        return (
            <div className="FeatureCard">
                    <img className="FeatureIcon" src={this.props.src} alt={this.props.alt}/>
                    <div className="FeatureContent">
                        {this.props.children}
                    </div>

            </div>
        );
    }
}

export default FeatureCard;