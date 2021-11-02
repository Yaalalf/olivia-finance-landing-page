/*
Version en desarrollo de la calculadora:

cambios: 
    colocar simbolos de monedas en vivo al final del input

*/
/*
import React from 'react';
import './style/Calculator.css';

class CalculatorAdvanced extends React.Component
{
    CAMBIO_EUR = 40;
    CAMBIO_USD = 35;
    state = {
        'EUR' : "",
        'CUP' : "",
        'USD' : ""
    };

    constructor(props)
    {
        super(props);

        this.valueEUR = this.state.EUR;
        this.valueUSD = this.state.USD;
        this.valueCUP = this.state.CUP;

        this.numberFormatUSD = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
        this.numberFormatEUR = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'});
        this.numberFormatCUP = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'CUP'});
    }

    handleChange= (e)=>{ 
        let pattern = /^[0-9]*(\.?)[0-9]+$/;
        this.changeInputs(e,pattern);    
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

    changeInputs(e,pattern)
    {
        let ok = true;
        let data = e.nativeEvent.data;
        if(data == null)
        {
            
            ok = false;
            data = 1;
        }

        if(data)
        {
            if(pattern.test(data) || data === ".")
            {
                switch(e.target.name)
                {
                    case 'EUR':
                    
                        if(ok)
                        {
                            this.valueEUR = this.valueEUR.concat(data); 
                        } 
                        else
                        {
                            this.valueEUR = this.valueEUR.substring(0,this.valueEUR.length-1);
                        }

                        if(this.valueEUR)
                        {
                        this.valueCUP = (this.valueEUR * this.CAMBIO_EUR);
                        this.valueUSD = (this.valueEUR * this.CAMBIO_EUR / this.CAMBIO_USD);

                        this.setState({'EUR': this.numberFormatEUR.format(this.valueEUR)}); 
                        this.setState({'CUP': this.numberFormatCUP.format(this.valueCUP)});
                        this.setState({'USD': this.numberFormatUSD.format(this.valueUSD)});
                        }
                        else
                        {
                            this.valueUSD = '';
                            this.valueCUP = '';

                            this.setState({'EUR': ''}); 
                            this.setState({'CUP': ''});
                            this.setState({'USD': ''});  
                        }
                        break;
                    
                    case 'CUP': 
                        if(ok)
                        {
                            this.valueCUP = this.valueCUP.concat(data); 
                        } 
                        else
                        {
                            this.valueCUP = this.valueCUP.substring(0,this.valueCUP.length-1);
                        }
                    
                        if(this.valueCUP)
                        {
                            this.valueEUR = (this.valueCUP / this.CAMBIO_EUR);
                            this.valueUSD = (this.valueCUP / this.CAMBIO_USD);
            
                            this.setState({'CUP':this.numberFormatCUP.format(this.valueCUP)}); 
                            this.setState({'EUR':this.numberFormatEUR.format(this.valueEUR)});
                            this.setState({'USD':this.numberFormatUSD.format(this.valueUSD)});
                        }
                        else
                        {
                            this.valueUSD = '';
                            this.valueEUR = '';

                            this.setState({'EUR': ''}); 
                            this.setState({'CUP': ''});
                            this.setState({'USD': ''});  
                        }
                        break;
                    case 'USD':  
                        
                        if(ok)
                        {
                            this.valueUSD = this.valueUSD.concat(data); 
                        } 
                        else
                        {
                            this.valueUSD = this.valueUSD.substring(0,this.valueUSD.length-1);
                        }

                        if(this.valueUSD)
                        {
                            this.valueCUP = (this.valueUSD * this.CAMBIO_USD);
                            this.valueEUR = (this.valueUSD * this.CAMBIO_USD / this.CAMBIO_EUR);
            
                            this.setState({'USD':this.numberFormatUSD.format(this.valueUSD)}); 
                            this.setState({'CUP':this.numberFormatCUP.format(this.valueCUP)});
                            this.setState({'EUR':this.numberFormatEUR.format(this.valueEUR)});
                        }
                        else
                        {
                            this.valueCUP = '';
                            this.valueEUR = '';

                            this.setState({'EUR': ''}); 
                            this.setState({'CUP': ''});
                            this.setState({'USD': ''});  
                        }
                        break;

                    default :
                        break;
                }
                
            }
        }
    }
}

export default CalculatorAdvanced;
*/