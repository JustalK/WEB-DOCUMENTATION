/**
 * The components managing the roadmap menu
 * @module components/Roadmap
 */
import React from 'react'
import Anchor from '@components/atoms/Anchor'
import './style.scss'

/**
 * @function Content
 * Create the component Roadmap
 * @return {Object} Return the dom of the Roadmap menu
 */
const Roadmap = ({ className, roadmap }) => {
  return (
    <div className={className}>
      {roadmap.map((rm) => (
        <Anchor key={rm} link={rm} text={rm} />
      ))}
    </div>
  )
}

export default Roadmap
