/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import Seo from '@components/Seo'
import Course from '@components/templates/Course'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const hamburgerMenu = 'menu1'
  const roadmap = ['azeaze', 'azeaeae']
  return (
    <>
      <Seo title="Home" description="Description of Home" />
      <Course hamburgerMenu={hamburgerMenu} roadmap={roadmap} />
    </>
  )
}

export default Home
