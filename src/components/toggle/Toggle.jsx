import React, { useState } from 'react';
import './toggle.css'

const ToggleButton = () => {

    const [toggle, setToggle] = useState(false);
    let rootStyle = document.getElementById('root').style;
    
    if(toggle){
        //setting to light mode
        rootStyle.setProperty('--color-bg', 'white');
        rootStyle.setProperty('--color-bg-variant', 'orange');
        rootStyle.setProperty('--color-primary', 'red');
        rootStyle.setProperty('--color-primary-variant', 'orange');
        rootStyle.setProperty('--color-white', '#green');
        rootStyle.setProperty('--color-light', 'red');
    }
    else{
        //setting to dark mode - default
        rootStyle.setProperty('--color-bg', '#1f1f38');
        rootStyle.setProperty('--color-bg-variant', '#2c2c6c');
        rootStyle.setProperty('--color-primary', '#4db5ff');
        rootStyle.setProperty('--color-primary-variant', 'rgba(77,181,255,0.4)');
        rootStyle.setProperty('--color-white', '#fff');
        rootStyle.setProperty('--color-light', 'rgba(255,255,255,0.6)');
    }

    const triggerToggle = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return(
        <button onClick={triggerToggle}>Mode</button>
    )
}

export default ToggleButton;