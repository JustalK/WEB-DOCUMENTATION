/**
 * The components managing the content in the middle area
 * @module components/Content
 */
import React from 'react'
import useSWR from 'swr'
import fetcher from '@services/Api'
import GET_MENU from '@services/menus'
import SubMenu from '@components/atoms/SubMenu'
import './styles.scss'

/**
 * @function Content
 * Create the component Content
 * @return {Object} Return the dom of the Content page
 */
const PageMenu = ({ setSlug }) => {
  const { data } = useSWR(GET_MENU('react'), fetcher)

  return <>{data && data.menus.map((menu, index) => <SubMenu key={index} menu={menu} setSlug={setSlug}></SubMenu>)}</>
}

export default PageMenu
