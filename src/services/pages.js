const GET_PAGE = (slug) => `
  query GetPage {
    page(where: {slug: "${slug}"}) {
      title
      content {
        html
      }
    }
  }
`

export default GET_PAGE
