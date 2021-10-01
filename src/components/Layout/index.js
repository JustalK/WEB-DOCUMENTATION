/**
 * The components managing the layout of the pages
 * @module components/Layout
 */

import React, { useState } from 'react'
import Menu from '@components/Menu'
import clsx from 'clsx'
/**
 * @function Layout
 * Create the component Layout
 * @return {Object} Return the dom of the Layout page
 */
const Layout = ({ children }) => {
  const [isHambugerOpen, setIsHamburgerOpen] = useState(true)

  return (
    <div className="fluid-container">
      <div className="container">
        <Menu setIsHamburgerOpen={setIsHamburgerOpen} />
        <div className={clsx({ hamburger: true, 'hamburger-open': isHambugerOpen })} />
        <div className="content">{children}</div>
        <div className="roadmap" />
      </div>
    </div>
  )
}

export default Layout
