/*
Project 4: Window Size Tracker

Display and update window dimensions
Learning goals:

Basic useEffect
Cleanup functions
Event listeners
*/

import { useEffect, useState } from 'react';
// import '../style/Proj004.css';

const Proj004WindowDimensionDisplay = () => {

  const [windowDimensions, setWindowDimensions] = useState({
    width:window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {

    // use effect is loaded when the component is mounted.  
    // this allows the listener to be loaded and defines the handle resize function
    // the return statement is used to remove the event listener
    console.log('use effect');
    const handleResize = () => {
      console.log('handle resize');
      setWindowDimensions({
        width:window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="component-group">
      <h1>Project 4</h1>
      <h2>Project 4 Window Dimension Display</h2>
      <p>Window dimensions: {windowDimensions.width} x {windowDimensions.height}</p>
    </div>
  );

}

export default Proj004WindowDimensionDisplay