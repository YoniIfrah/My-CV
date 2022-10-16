import React, { useState } from 'react';
import './toggle.css'



const ToggleButton = () => {

    const [toggle, setToggle] = useState(false);
    let rootStyle = document.getElementById('root').style;
    let BottonName = !toggle ? "Light Mode" : "Dark Mode";

    
    if(toggle){
        //setting to light mode
        rootStyle.setProperty('--color-bg', '#EEEEEE');
        // need to fix the color below '--color-bg-variant'
        rootStyle.setProperty('--color-bg-variant', '#e5e4e2');
        rootStyle.setProperty('--color-primary', '#64488F');
        rootStyle.setProperty('--color-primary-variant', '#A899C1');
        rootStyle.setProperty('--color-white', 'black');
        rootStyle.setProperty('--color-light', '#121212');
    }
    else{
        //setting to dark mode - default
        rootStyle.setProperty('--color-bg', '#121212');
        rootStyle.setProperty('--color-bg-variant', '#211434');
        rootStyle.setProperty('--color-primary', '#64488F');
        rootStyle.setProperty('--color-primary-variant', '#A899C1');
        rootStyle.setProperty('--color-white', '#fff');
        rootStyle.setProperty('--color-light', 'rgba(255,255,255,0.6)');
    }

    const triggerToggle = () => {
        setToggle(!toggle)
        console.log(toggle)
    }

    return(
        <button className='btn btn-primary' onClick={triggerToggle}>{BottonName}</button>
    )
}

export default ToggleButton;