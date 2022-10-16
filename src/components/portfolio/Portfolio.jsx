import React from 'react'
import './portfolio.css'
import btc from '../../assets/portfolio-images/btc.jpg'
import covid from '../../assets/portfolio-images/covid.jpg'
import house from '../../assets/portfolio-images/houses.jpg'
import stocks from '../../assets/portfolio-images/stocks.jpg'
import schedule from '../../assets/portfolio-images/schedule.jpg'

const data = [
  {
    id: 1,
    img: btc,
    title: 'Cryptocurrency Signals',
    github: 'hidden',
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
    img: stocks,
    title: 'Stocks Data Visualization',
    github: 'https://github.com/YoniIfrah/Python-Financial-Analysis-Algorithmic-Trading',
  },
  {
    id: 5,
    img: schedule,
    title: 'Appointment Web App',
    github: 'https://github.com/YoniIfrah/pets_nanny',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>

      {
        data.map(({id, img, title, github}) => {
          return (
            <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={img} alt={title} className='portfolio-img' />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                <a href={github} className='btn'>Github</a>
                <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>);
        })
      }
      </div>

    </section>
  )
}

export default Portfolio