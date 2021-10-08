/**
 * The components managing the roadmap menu
 * @module components/Roadmap
 */
import React from 'react'
import Anchor from '@components/atoms/Anchor'
import './style.scss'
import { stringToSlug } from '@src/utils/string'
/**
 * @function Content
 * Create the component Roadmap
 * @return {Object} Return the dom of the Roadmap menu
 */
const Roadmap = ({ className, roadmap }) => {
  return (
    <ul className={className}>
      {roadmap.map((rm) => (
        <li key={rm.id}>
          <Anchor link={`#${stringToSlug(rm.innerText)}`} text={rm.innerText} />
        </li>
      ))}
    </ul>
  )
}

export default Roadmap
