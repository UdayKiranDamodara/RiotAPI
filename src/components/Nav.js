import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

import './styles/Nav.css'

const Nav = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
    return(
        <div className='nav' style={{ background: theme.ui, color: theme.syntax }}>
            <Link style={{ background: theme.ui, color: theme.syntax }} to='/'>
                <div>Home</div>
            </Link>
            <Link style={{ background: theme.ui, color: theme.syntax }} to='/Champions'>
                <div>Champions</div>
            </Link>
            <Link style={{ background: theme.ui, color: theme.syntax }} to='/Summoners'>
                <div>Summoners</div>
            </Link>
        </div>
    )
}

export default Nav;