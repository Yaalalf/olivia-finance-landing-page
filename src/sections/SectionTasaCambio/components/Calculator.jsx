import React from 'react';
import './style/Calculator.css';

class Calculator extends React.Component
{
    CAMBIO_EUR = 40;
    CAMBIO_USD = 35;
    state = {
        'EUR' : "",
        'CUP' : "",
        'USD' : ""
    };

    handleChange= (e)=>{
        let value = e.target.value; 
        let pattern = /^[0-9]+([.])?([0-9]+)?$/;

        if(value === "")
        {
            this.setState({'EUR':''});
            this.setState({'CUP':''});
            this.setState({'USD':''});
        }

        if(pattern.test(value))
        {
            switch(e.target.name)
            {
                case 'EUR':

                    this.setState({'EUR':value});
                    this.setState({'CUP': (value * this.CAMBIO_EUR).toFixed(2)});
                    this.setState({'USD': (value * this.CAMBIO_EUR/this.CAMBIO_USD).toFixed(2)});

                    break;
                case 'CUP':

                    this.setState({'CUP':value});
                    this.setState({'EUR': (value / this.CAMBIO_EUR).toFixed(2)});
                    this.setState({'USD': (value / this.CAMBIO_USD).toFixed(2)});

                    break;
                case 'USD':

                    this.setState({'USD':value});
                    this.setState({'CUP': (value * this.CAMBIO_USD).toFixed(2)});
                    this.setState({'EUR': (value * this.CAMBIO_USD/this.CAMBIO_EUR).toFixed(2)});

                    break;

                default: 
                    break;
            }
        }

    }

    render()
    {
        return (
            <div className="CalculatorContainer">
                <h2>Calculador</h2>
                <p>Calcule el precio de su envio basado en nuestra tasa de cambio</p>
                <div className="Calculator">
                    <div className="EUR">
                        <span>EUR</span>
                        <input type="text" name="EUR" value={this.state.EUR} onChange={this.handleChange} />
                    </div>
                    <div className="CUP">
                        <span>CUP</span>
                        <input type="text" name="CUP" value={this.state.CUP} onChange={this.handleChange} />
                    </div>
                    <div className="USD">
                        <span>USD</span>
                        <input type="text" name="USD" value={this.state.USD} onChange={this.handleChange} />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Calculator;