/**
 * The components managing the navbar of the pages
 * @module components/Menu
 */

import React from 'react'

/**
 * @function Menu
 * Create the component Menu
 * @return {Object} Return the dom of the Menu page
 */
const Menu = ({ title }) => {
  return (
    <div>
      <span>{title}</span>
    </div>
  )
}

export default Menu
