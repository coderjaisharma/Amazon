import React from 'react'
import {Link} from 'react-router-dom'

import  SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './Header.css'
import { useStateValue } from './StateProvider'

const Header = () => {
    const [{ basket }]=useStateValue();
    return (
        <nav className="header">
            <Link to="/" >
              
                <img src="images/logo192.png" alt="" className="header__logo"></img>
               
                </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput"></input>
            <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to='/login' className="header__link">
            <div className="header__option">
                <span  className='header__optionLineOne'>hello jai</span>
                <span className="header__optionLineTwo">Sign In</span>
            </div>
            </Link>
            <Link to='/login' className="header__link">
            <div className="header__option">
                <span className='header__optionLineOne'>Return</span>
                <span className="header__optionLineTwo"> & Orders</span>
            </div>
            </Link>
            <Link to='/login' className="header__link">
            <div className="header__option">
                <span className='header__optionLineOne'>Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket" >
                <ShoppingBasketIcon/>
                <span className="header__optionLineTwo  header__basketCount">{basket?.length}</span>
                </div>
            </Link>

            </div>
            

        </nav>
    )
}

export default Header
