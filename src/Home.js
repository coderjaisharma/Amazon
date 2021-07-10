import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className="homepage">
        <img src="images/amazon1.jpg" alt="" className="home__image"></img>
        <div className="mid__page">
        <Product id='1' title='the lean startup' price={11} rating={3} image="/images/rich.jpg" />
        <Product id='1' title='the lean startup' price={11} rating={3} image="/images/rich.jpg" />
     
        </div>
        <div className="mid__page">
        <Product id='1' title='the lean startup' price={11} rating={3} image="/images/rich.jpg" />
        <Product id='1' title='the lean startup' price={11} rating={3} image="/images/rich.jpg" />
        <Product id='1' title='the lean startup' price={11} rating={3} image="/images/rich.jpg" />
        <Product id='1' title='the lean startup' price={11} rating={3} image="/images/rich.jpg" />
        </div>
        <div className="mid__page">
        <Product id='1' title='the lean startup' price={11} rating={3} image="/images/rich.jpg" />
        <Product id='1' title='the lean startup' price={11} rating={3} image="/images/rich.jpg" />
     
        </div>
        </div>
    )
}

export default Home
