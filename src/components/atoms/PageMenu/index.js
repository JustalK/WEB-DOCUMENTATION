/**
 * The components managing the content in the middle area
 * @module components/Content
 */
import React, { useState } from 'react'
import useSWR from 'swr'
import fetcher from '@services/Api'
import GET_MENU from '@services/menus'
import { useHistory } from 'react-router-dom'
import Collapse from '@kunukn/react-collapse'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import clsx from 'clsx'
import './styles.scss'

/**
 * @function Content
 * Create the component Content
 * @return {Object} Return the dom of the Content page
 */
const PageMenu = ({ setSlug }) => {
  const history = useHistory()
  const { data } = useSWR(GET_MENU, fetcher)
  const [opened, setOpened] = useState(false)
  const handleClick = (e, page) => {
    e.preventDefault()
    history.push(page.slug)
    setSlug(page.slug)
  }

  const handleOpened = () => {
    setOpened((c) => !c)
  }

  return (
    <>
      {data &&
        data.menus.map((menu, index) => {
          const { pages } = menu
          return (
            <div key={index} className="page-menu">
              <span onClick={handleOpened} className="page-menu_label" key={menu.id}>
                {menu.name} <KeyboardArrowUpIcon />
              </span>
              <Collapse isOpen={opened} transition="height 250ms cubic-bezier(0.4, 0, 0.2, 1)">
                <ul className={clsx({ 'page-menu_list': true, '--opened': opened })}>
                  {pages &&
                    pages.map((page) => {
                      return (
                        <li key={page.title} className={clsx({ 'page-menu_list_item': true, '--show': opened })}>
                          <a href={page.slug} onClick={(e) => handleClick(e, page)}>
                            {page.title}
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </Collapse>
            </div>
          )
        })}
    </>
  )
}

export default PageMenu
