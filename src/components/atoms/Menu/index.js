/**
 * The components managing the navbar of the pages
 * @module components/Menu
 */

import React from 'react'
import './styles.scss'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import HomeIcon from '@mui/icons-material/Home'
import clsx from 'clsx'
/**
 * @function Menu
 * Create the component Menu
 * @return {Object} Return the dom of the Menu page
 */
const Menu = ({ isHambugerOpen, setIsHambugerOpen }) => {
  return (
    <header>
      <button className={clsx({ 'hamburger-menu': true, 'hamburger-menu-open': isHambugerOpen })} onClick={() => setIsHambugerOpen((c) => !c)}>
        {!isHambugerOpen && <MenuIcon fontSize="large" />}
        {isHambugerOpen && <MenuOpenIcon fontSize="large" />}
      </button>
      <button className="hamburger-home">
        <HomeIcon fontSize="large" />
      </button>
    </header>
  )
}

export default Menu
