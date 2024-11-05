/*

Project 2: Form Input Manager

Create a form with real-time validation
Learning goals:

Multiple state variables
Controlled components
Basic form handling

*/

import { useEffect, useState } from "react";
import CustomInput from "./ui/CustomInput";
import Proj001IncrementDecrement from "./Proj001IncrementDecrement";

const Proj002InputForm = () => {
  const [initValue, setInitValue] = useState(0);
  const [initIncrement, setInitIncrement] = useState(1);

  const handleValueChange = (event) => {
    setInitValue(Number(event.target.value));
  }

  const handleIncrementChange = (event) => {  
    setInitIncrement(Number(event.target.value));
  }
  
  return (
    <div>
      <h1>Project 2</h1>
      <h2>Project 2 Input Form</h2>
      <CustomInput 
        className=".custom-input" 
        type="number" 
        value={initValue} 
        onChange={handleValueChange} 
        label="Initial Value"
      />
      <CustomInput 
        className=".custom-input" 
        type="number" 
        value={initIncrement} 
        onChange={handleIncrementChange} 
        label="Initial Increment"
        />
      <h2>Project 1 Counter - Live Updated with useEffect hook</h2>
      <Proj001IncrementDecrement initialValue={initValue} initialIncrement={initIncrement} />
    </div>
  );
};

export default Proj002InputForm;