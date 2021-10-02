/**
 * The components managing the navbar of the pages
 * @module components/Menu
 */

import React from 'react'
import './styles.scss'
import clsx from 'clsx'
/**
 * @function Menu
 * Create the component Menu
 * @return {Object} Return the dom of the Menu page
 */
const Menu = ({ title, isHambugerOpen, setIsHambugerOpen }) => {
  return (
    <header>
      <button className={clsx({ 'hamburger-menu': true, 'hamburger-menu-open': isHambugerOpen })} onClick={() => setIsHambugerOpen((c) => !c)}>
        Hamburger
      </button>
      <div>{title}</div>
    </header>
  )
}

export default Menu
