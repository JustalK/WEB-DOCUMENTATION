/**
 * The components managing the anchor
 * @module components/Roadmap
 */
import React from 'react'
import './style.scss'

/**
 * @function Anchor
 * Create the component Anchor
 * @return {Object} Return the dom of the Anchor
 */
const Anchor = ({ link, text }) => {
  return (
    <a className="anchor" href={link}>
      {text}
    </a>
  )
}

export default Anchor
