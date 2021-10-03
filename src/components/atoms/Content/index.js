/**
 * The components managing the content in the middle area
 * @module components/Content
 */
import React from 'react'
import './style.scss'

/**
 * @function Content
 * Create the component Content
 * @return {Object} Return the dom of the Content page
 */
const Content = ({ content }) => {
  return <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
}

export default Content
