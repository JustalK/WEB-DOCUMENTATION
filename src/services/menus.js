const GET_MENU = (category) => `
  query GetMenu {
    menus(where: {category: "${category}"}) {
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
