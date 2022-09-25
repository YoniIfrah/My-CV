import React from 'react'
import './portfolio.css'
import btc from '../../assets/svgtopng/btc.png'
import covid from '../../assets/svgtopng/covid.png'
import house from '../../assets/svgtopng/house.png'
import stocks from '../../assets/svgtopng/stocks.png'
import webdev from '../../assets/svgtopng/webdev.png'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
      <PortfolioCard   img={btc}  />
      <PortfolioCard   img={covid}  />
      <PortfolioCard   img={house}  />
      <PortfolioCard   img={stocks}  />
      <PortfolioCard   img={webdev}  />
      </div>



    </section>
  )
}


function PortfolioCard(props) {
  const img=props.img;
  return (<article className='portfolio_item'>
      <div className='portfolio_item-image'>
        <img src={img} alt="" />
      </div>
      <h3>This is a portfolio title</h3>
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
    </article>);
}
  export default Portfolio