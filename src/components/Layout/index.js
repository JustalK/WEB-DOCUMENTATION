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
    <div className={clsx({ 'hamburger-open': isHambugerOpen })}>
      <Menu setIsHamburgerOpen={setIsHamburgerOpen} />
      <div className="hamburger" />
      <div className="content">{children}</div>
      <div className="roadmap" />
    </div>
  )
}

export default Layout
