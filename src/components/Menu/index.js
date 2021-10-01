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
const Menu = ({ title }) => {
  return (
    <header>
      <div>{title}</div>
    </header>
  )
}

export default Menu
