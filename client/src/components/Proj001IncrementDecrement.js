/*

Project 1: Counter Application

Build a simple counter with +/- buttons
Learning goals:

Basic useState
Event handling
Re-rendering concepts

*/

import { useDebugValue, useEffect, useState } from 'react';
import CustomButton from './ui/CustomButton';
import '../style/Proj001.css';

const Proj001IncrementDecrement = ( {initialValue = 100, initialIncrement = 1} ) => {
    const [value, setValue] = useState(initialValue);
    const [incrementValue, setIncrementValue] = useState(initialIncrement);

    const increment = () => setValue(prev => prev + incrementValue);
    const decrement = () => setValue(prev => prev - incrementValue);
    const resetValue = () => setValue(initialValue);

    useEffect(() => {
        setIncrementValue(initialIncrement);
        setValue(initialValue);
    }, [initialIncrement, initialValue]);

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