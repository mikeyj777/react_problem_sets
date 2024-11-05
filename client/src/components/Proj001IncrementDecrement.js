/*

Project 1: Counter Application

Build a simple counter with +/- buttons
Learning goals:

Basic useState
Event handling
Re-rendering concepts

*/

import { useState } from 'react';
import CustomButton from './ui/CustomButton';
import '../style/Proj001.css';

const Proj001IncrementDecrement = ( {initialValue = 100} ) => {
    const [value, setValue] = useState(initialValue);

    const increment = () => setValue(prev => prev + 1);
    const decrement = () => setValue(prev => prev - 1);
    const resetValue = () => setValue(initialValue);

    return (
        <div className="counter-container">
            <CustomButton
                variant = "plus"
                onClick={increment}
            />
            <span className="counter-value">{value}</span>
            <CustomButton
                variant="minus"
                onClick={decrement}
            />
            <CustomButton variant="reset" onClick={resetValue}>
                Reset Value
            </CustomButton>
            
        </div>
    )

};

export default Proj001IncrementDecrement;