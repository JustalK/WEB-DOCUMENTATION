const GET_MENU = `
  query GetMenu {
    menus {
      name
      pages {
        id
        title
        slug
      }
    }
  }
`

export default GET_MENU
