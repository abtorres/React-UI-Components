import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    this.props = props;
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
}

export default CalculatorDisplay;