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

  return (
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
}

export default PageMenu
