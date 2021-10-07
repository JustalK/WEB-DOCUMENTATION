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
  const parser = new DOMParser()
  const doc = parser.parseFromString(roadmap, 'text/html')
  const elements = doc.querySelectorAll('.anchor')

  return (
    <div className={className}>
      {Array.from(elements).map((rm) => (
        <Anchor key={rm.id} link={`#${rm.id}`} text={rm.innerText} />
      ))}
    </div>
  )
}

export default Roadmap
