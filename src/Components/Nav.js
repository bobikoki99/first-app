import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <nav>
            <h3>Counter App</h3>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/counter'><li>Counter</li></Link>
                <Link to='/bookshop'><li>BookShop</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;