import { gql } from 'graphql-request'

export async function fetchHome($graphql: any) {
  const query = gql`
    query {
      home {
        Email
        Tel
        Github
        Skills {
          Skill
          Icon {
            Name
            Type
          }
        }
        Education {
          Title
          Icon {
            Name
            Type
          }
          Info {
            Title
            StartDate
            EndDate
            Description
          }
        }
        Experience {
          Title
          Icon {
            Name
            Type
          }
          Info {
            Title
            StartDate
            EndDate
            Description
          }
        }
      }
    }
  `

  const res = await $graphql.request(query)
  return res.home
}
