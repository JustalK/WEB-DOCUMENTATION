/**
 * The components managing the navbar of the pages
 * @module components/Menu
 */

import React from 'react'
import './styles.scss'
/**
 * @function Menu
 * Create the component Menu
 * @return {Object} Return the dom of the Menu page
 */
const Menu = ({ title, setIsHambugerOpen }) => {
  return (
    <header>
      <button onClick={() => setIsHambugerOpen((c) => !c)}>Hamburger</button>
      <div>{title}</div>
    </header>
  )
}

export default Menu
