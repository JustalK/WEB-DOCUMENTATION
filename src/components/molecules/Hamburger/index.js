/**
 * The components managing the hamburger menu
 * @module components/Hamburger
 */
import React from 'react'
import clsx from 'clsx'
import './style.scss'

/**
 * @function Hamburger
 * Create the component Hamburger
 * @return {Object} Return the dom of the Hamburger menu
 */
const Hamburger = ({ children, isHambugerOpen }) => {
  return <div className={clsx({ hamburger: true, 'hamburger-open': isHambugerOpen })}>{children}</div>
}

export default Hamburger
