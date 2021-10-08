/**
 * The module managing the home page
 * @module Home
 */

import React, { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import Seo from '@components/Seo'
import fetcher from '@services/Api'
import GET_PAGE from '@services/pages'
import Content from '@components/atoms/Content'
import Hamburger from '@components/molecules/Hamburger'
import Roadmap from '@components/molecules/Roadmap'
import Menu from '@components/atoms/Menu'
import PageMenu from '@components/atoms/PageMenu'
import { stringToSlug } from '@src/utils/string'
import clsx from 'clsx'
import '@components/templates/Course/style.scss'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const [isHambugerOpen, setIsHambugerOpen] = useState(true)
  const { pageSlug } = useParams()
  const [slug, setSlug] = useState(pageSlug)
  const { data } = useSWR(GET_PAGE(slug), fetcher)

  const roadmap = useMemo(() => {
    if (!data) {
      return []
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(data.page.content.html, 'text/html')
    const elements = doc.querySelectorAll('h3')
    return Array.from(elements)
  }, [data])

  const content = useMemo(() => {
    if (!data) {
      return ''
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(data.page.content.html, 'text/html')
    const elements = doc.querySelectorAll('h3')
    const h3 = Array.from(elements)

    h3.forEach((item) => {
      const newTitle = document.createElement('h3')
      newTitle.id = stringToSlug(item.innerText)
      newTitle.innerHTML = item.innerText
      item.parentNode.replaceChild(newTitle, item)
    })

    return doc.body.innerHTML
  }, [data])

  return (
    <>
      <Seo title="Home" description="Description of Home" />
      <Menu isHambugerOpen={isHambugerOpen} setIsHambugerOpen={setIsHambugerOpen} />
      <div className="fluid-container">
        <div className={clsx({ container: true, 'container-wide': !isHambugerOpen })}>
          <Hamburger isHambugerOpen={isHambugerOpen}>
            <PageMenu setSlug={setSlug} />
          </Hamburger>
          <Content isHambugerOpen={isHambugerOpen} content={content} />
          <Roadmap className="roadmap" roadmap={roadmap} />
        </div>
      </div>
    </>
  )
}

export default Home
