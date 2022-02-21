import gql from 'graphql-tag'

const getDataPages = gql`
  query ($locale: I18NLocaleCode) {
    pages(locale: $locale) {
      data {
        attributes {
          title
          description
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
// const getPage = gql`
//   query ($locale: I18NLocaleCode) {
//     pages(locale: $locale) {
//       data {
//         attributes {
//           title
//           description
//           slug
//           image {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

const getDataFaqs = gql`
  query ($locale: I18NLocaleCode) {
    faqs(locale: $locale, filters: { show: { eq: true } }) {
      data {
        attributes {
          title
          slug
          description
          createdAt
          updatedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`

export { getDataPages, getDataFaqs }
