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

export { getDataPages }
