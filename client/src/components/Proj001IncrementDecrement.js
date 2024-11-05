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

const Proj001IncrementDecrement = () => {
    const [value, setValue] = useState(0);
    const increment = () => {
        console.log('increment');
        setValue(value + 1);
    }

    const decrement = () => {
        console.log('decrement');
        setValue(value - 1);
    }

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
        </div>
    )

};

export default Proj001IncrementDecrement;