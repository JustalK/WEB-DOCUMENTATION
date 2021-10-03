/**
 * The components managing the roadmap menu
 * @module components/Roadmap
 */
import React, { useState } from 'react'
import Content from '@components/atoms/Content'
import Hamburger from '@components/molecules/Hamburger'
import Roadmap from '@components/molecules/Roadmap'
import Menu from '@components/atoms/Menu'
import PageMenu from '@components/atoms/PageMenu'
import clsx from 'clsx'
import './style.scss'

/**
 * @function Content
 * Create the component Roadmap
 * @return {Object} Return the dom of the Roadmap menu
 */
const Course = ({ children, roadmap }) => {
  const [isHambugerOpen, setIsHambugerOpen] = useState(false)

  return (
    <>
      <Menu isHambugerOpen={isHambugerOpen} setIsHambugerOpen={setIsHambugerOpen} />
      <div className="fluid-container">
        <div className={clsx({ container: true, 'container-wide': !isHambugerOpen })}>
          <Hamburger isHambugerOpen={isHambugerOpen}>
            <PageMenu />
          </Hamburger>
          <Content isHambugerOpen={isHambugerOpen}>{children}</Content>
          <Roadmap className="roadmap" roadmap={roadmap} />
        </div>
      </div>
    </>
  )
}

export default Course
