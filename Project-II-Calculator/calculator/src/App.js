import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay text='0' buttonStyle="display"/>
      <ActionButton text="clear" buttonStyle="clear-zero"/>
      <NumberButton text="÷" buttonStyle="number-button operators"/>
      <NumberButton text="7" buttonStyle="number-button"/>
      <NumberButton text="8" buttonStyle="number-button"/>
      <NumberButton text="9" buttonStyle="number-button"/>
      <NumberButton text="x" buttonStyle="number-button operators"/>
      <NumberButton text="4" buttonStyle="number-button"/>
      <NumberButton text="5" buttonStyle="number-button"/>
      <NumberButton text="6" buttonStyle="number-button"/>
      <NumberButton text="-" buttonStyle="number-button operators"/>
      <NumberButton text="1" buttonStyle="number-button"/>
      <NumberButton text="2" buttonStyle="number-button"/>
      <NumberButton text="3" buttonStyle="number-button"/>
      <NumberButton text="+" buttonStyle="number-button operators"/>
      <ActionButton text="0" buttonStyle="clear-zero"/>
      <NumberButton text="=" buttonStyle="number-button operators"/>
    </div>
  );
};

export default App;
