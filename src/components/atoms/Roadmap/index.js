/**
 * The components managing the roadmap menu
 * @module components/Roadmap
 */
import React from 'react'
import './style.scss'

/**
 * @function Content
 * Create the component Roadmap
 * @return {Object} Return the dom of the Roadmap menu
 */
const Roadmap = ({ children }) => {
  return <div className="roadmap">{children}</div>
}

export default Roadmap
