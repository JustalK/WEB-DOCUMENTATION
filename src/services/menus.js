const GET_MENU = `
  query MyQuery {
    menus {
      name
      pages {
        id
        title
      }
    }
  }
`

export default GET_MENU
