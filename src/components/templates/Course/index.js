/**
 * The components managing the roadmap menu
 * @module components/Roadmap
 */
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import fetcher from '@services/Api'
import GET_PAGE from '@services/pages'
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
const Course = ({ roadmap }) => {
  const [isHambugerOpen, setIsHambugerOpen] = useState(true)
  const { pageSlug } = useParams()
  const [slug, setSlug] = useState(pageSlug)
  const { data } = useSWR(GET_PAGE(slug), fetcher)

  return (
    <>
      <Menu isHambugerOpen={isHambugerOpen} setIsHambugerOpen={setIsHambugerOpen} />
      <div className="fluid-container">
        <div className={clsx({ container: true, 'container-wide': !isHambugerOpen })}>
          <Hamburger isHambugerOpen={isHambugerOpen}>
            <PageMenu setSlug={setSlug} />
          </Hamburger>
          {data && <Content isHambugerOpen={isHambugerOpen} content={data.page.content.html} />}
          <Roadmap className="roadmap" roadmap={roadmap} />
        </div>
      </div>
    </>
  )
}

export default Course
