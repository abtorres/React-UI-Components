import React from 'react';
import './Button.css';

const ActionButton = props => {
    this.props = props;
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
}

export default ActionButton;