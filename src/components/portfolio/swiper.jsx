import React, { useState, useLayoutEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "../portfolio/portfolio.css";

import { data } from "../../assets/ImageBundler";

function useHover() {
    const [hovering, setHovering] = useState(false);
    const onHoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false),
    };
    return [hovering, onHoverProps];
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
}

export default function Swipers() {
    const [buttonAIsHovering, buttonAHoverProps] = useHover();
    const [width] = useWindowSize();

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className="container portfolio_container"></div>

                    {data.map(({ id, img, title, github }) => {
                        return (
                            <SwiperSlide key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img
                                        src={img}
                                        alt={title}
                                        className="portfolio-img center"
                                        style={{ minWidth: width * 0.9 }}
                                    />
                                </div>
                                <h3 {...buttonAHoverProps}>
                                    {buttonAIsHovering ? (
                                        <a
                                            href={github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {" "}
                                            <button className="btn">
                                                Go To Github
                                            </button>{" "}
                                        </a>
                                    ) : (
                                        <button className="btn">
                                            {" "}
                                            {title}
                                        </button>
                                    )}
                                </h3>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </>
        </section>
    );
}
