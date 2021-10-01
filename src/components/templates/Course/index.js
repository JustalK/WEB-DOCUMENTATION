/**
 * The components managing the roadmap menu
 * @module components/Roadmap
 */
import React from 'react'
import Content from '@components/atoms/Content'
import Hamburger from '@components/atoms/Hamburger'
import Roadmap from '@components/atoms/Roadmap'
import './style.scss'

/**
 * @function Content
 * Create the component Roadmap
 * @return {Object} Return the dom of the Roadmap menu
 */
const Course = ({ children, isHambugerOpen }) => {
  return (
    <div className="fluid-container">
      <div className="container">
        <Hamburger isHambugerOpen={isHambugerOpen} />
        <Content>{children}</Content>
        <Roadmap />
      </div>
    </div>
  )
}

export default Course
