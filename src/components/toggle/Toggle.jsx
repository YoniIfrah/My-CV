import React, { useState } from 'react';
import './toggle.css'

const ToggleButton = () => {

    const [toggle, setToggle] = useState(false);
    let rootStyle = document.getElementById('root').style;

    const triggerToggle = () => {
        setToggle( !toggle )
        //here will be the chage of root elements in css
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

        console.log(toggle)
    }

    return(
        <button className='btn btn-primary' onClick={triggerToggle}>Mode</button>
    )
}

export default ToggleButton;