/**
 * The components managing the content in the middle area
 * @module components/Content
 */
import React from 'react'
import useSWR from 'swr'
import fetcher from '@services/Api'
import GET_MENU from '@services/menus'

/**
 * @function Content
 * Create the component Content
 * @return {Object} Return the dom of the Content page
 */
const PageMenu = () => {
  const { data } = useSWR(GET_MENU, fetcher)
  return (
    <>
      {data &&
        data.menus.map((menu) => {
          const { pages } = menu
          return (
            <>
              <span key={menu.id}>{menu.name}</span>
              <ul>
                {pages &&
                  pages.map((page) => {
                    return <li key={page.title}>{page.title}</li>
                  })}
              </ul>
            </>
          )
        })}
    </>
  )
}

export default PageMenu
