/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import Seo from '@components/Seo'
import Course from '@components/templates/Course'
import Menu from '@components/atoms/Menu'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  return (
    <>
      <Seo title="Home" description="Description of Home" />
      <Menu />
      <Course>ggg</Course>
    </>
  )
}

export default Home
