/**
 * The components managing the content in the middle area
 * @module components/Content
 */
import React, { useState } from 'react'
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
const PageMenu = ({ setSlug, menu }) => {
  const history = useHistory()
  const [opened, setOpened] = useState(false)

  const handleOpened = () => {
    setOpened((c) => !c)
  }

  const handleClick = (e, page) => {
    e.preventDefault()
    history.push(page.slug)
    setSlug(page.slug)
  }

  const { pages } = menu
  const { location } = history

  return (
    <>
      {pages.length >= 2 && (
        <div className="page-menu">
          <span onClick={handleOpened} className="page-menu_label" key={menu.id}>
            {menu.name} <KeyboardArrowUpIcon className={clsx({ 'page-menu_chevron': true, 'page-menu_chevron--activated': opened })} />
          </span>
          <Collapse isOpen={opened} transition="height 250ms cubic-bezier(0.4, 0, 0.2, 1)">
            <ul className="page-menu_list">
              {pages &&
                pages.map((page) => {
                  return (
                    <li key={page.title} className="page-menu_list_item">
                      <a href={page.slug} className={clsx({ 'page-menu_list_item--activated': location.pathname === `/doc/${page.slug}` })} onClick={(e) => handleClick(e, page)}>
                        {page.title}
                      </a>
                    </li>
                  )
                })}
            </ul>
          </Collapse>
        </div>
      )}
      {pages.length === 1 && (
        <div className="page-menu">
          <a href={pages[0].slug} className={clsx({ 'page-menu_label': true, 'page-menu--activated': location.pathname === `/doc/${pages[0].slug}` })} onClick={(e) => handleClick(e, pages[0])}>
            <span onClick={handleOpened} className={clsx({ 'page-menu_label': true, 'page-menu_label--activated': location.pathname === `/doc/${pages[0].slug}` })} key={menu.id}>
              {menu.name}
            </span>
          </a>
        </div>
      )}
    </>
  )
}

export default PageMenu
