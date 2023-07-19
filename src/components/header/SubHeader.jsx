import React, { memo } from "react";
import Spline from "@splinetool/react-spline";
import ME from "../../assets/programing1.png";

const SubHeader = ({ support3D }) => {
    console.log("re-rendering child");

    return (
        <>
            {support3D ? (
                <Spline scene="https://prod.spline.design/xKshcm5k5QOA8zpx/scene.splinecode" />
            ) : (
                <div className="me">
                    <img src={ME} alt="" />
                </div>
            )}
        </>
    );
};

export default memo(SubHeader);
