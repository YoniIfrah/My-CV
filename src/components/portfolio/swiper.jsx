import React, { useState, useLayoutEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


// my imports
import btc from '../../assets/portfolio-images/btc.jpg'
import covid from '../../assets/portfolio-images/covid.jpg'
import house from '../../assets/portfolio-images/houses.jpg'
import stocks from '../../assets/portfolio-images/stocks.jpg'
import schedule from '../../assets/portfolio-images/schedule.jpg'
import '../portfolio/portfolio.css'


const data = [
    {
      id: 1,
      img: stocks,
      title: 'Stocks Data Visualization',
      github: 'https://github.com/YoniIfrah/Python-Financial-Analysis-Algorithmic-Trading',
    },
    {
      id: 2,
      img: covid,
      title: 'COVID19 Simulation (GUI)',
      github: 'https://github.com/YoniIfrah/COVID19',
    },
    {
      id: 3,
      img: house,
      title: 'Houses Price Prediction',
      github: 'https://github.com/YoniIfrah/House-Price-Prediction',
    },
    {
      id: 4,
      img: btc,
      title: 'Cryptocurrency Signals',
      github: 'hidden',
    },
    {
      id: 5,
      img: schedule,
      title: 'Appointment Web App',
      github: 'https://github.com/YoniIfrah/pets_nanny',
    }
  ]

function useHover() {
const [hovering, setHovering] = useState(false)
const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  }
    return [hovering, onHoverProps]
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Swipers() {
    const [buttonAIsHovering, buttonAHoverProps] = useHover()
    const [width] = useWindowSize();


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
    <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

      <div className='container portfolio_container'></div>

      {
        data.map(({id, img, title, github}) => {
          return (            
            <SwiperSlide key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={img} alt={title} className='portfolio-img center' style={{"minWidth": width*0.9}} />
                </div>
                <h3 {...buttonAHoverProps}>
                    {buttonAIsHovering
                    ? <a href={github} target="_blank" rel="noreferrer"> <button className='btn'>Go To Github</button> </a>
                    :  <button className='btn'> {title}</button>}
                </h3>
            </SwiperSlide>);
        })
      }

      </Swiper>
    </>
    </section>

  );
}
