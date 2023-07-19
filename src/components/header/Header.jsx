import React, { useMemo } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import SubHeader from "./SubHeader";

const checkWebGLSupport = () => {
    const canvas = document.createElement("canvas");
    const isSupported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
    if (isSupported) {
        console.log("WebGL is supported!");
    } else {
        console.log("WebGL is not supported in this browser.");
    }
    return isSupported;
};

const Header = () => {
    const support3D = useMemo(() => {
        return checkWebGLSupport();
    }, []);

    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Yoni Ifrah</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CTA />
                <br />
                <HeaderSocials />
                <SubHeader support3D={support3D} />
                <a href="#contact" className="scroll_down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
