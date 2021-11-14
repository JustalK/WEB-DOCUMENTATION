const GET_CATEGORY = (category) => `
  query MyQuery {
    categories(where: {title: "${category}"}) {
      menus {
        name
        pages {
          id
          slug
          title
        }
      }
    }
  }
`

export default GET_CATEGORY
