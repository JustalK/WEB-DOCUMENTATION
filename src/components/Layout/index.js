/**
 * The components managing the layout of the pages
 * @module components/Layout
 */

import React from 'react'
import Menu from '@components/Menu'
/**
 * @function Layout
 * Create the component Layout
 * @return {Object} Return the dom of the Layout page
 */
const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="hamburger" />
      <div className="content">{children}</div>
      <div className="roadmap" />
    </div>
  )
}

export default Layout
