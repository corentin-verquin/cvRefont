import { gql } from 'graphql-request'

export async function fetchProject($graphql: any) {
  const query = gql`
    query {
      project {
        Projects {
          Title
          Description
          Link
          Image {
            formats
          }
          Technos {
            Name
            Logo {
              formats
            }
          }
        }
      }
    }
  `

  const res = await $graphql.default.request(query)
  return res.project.Projects.map((x: any) => {
    x.Image = x.Image.formats.small.url
    x.Technos = x.Technos.map((t: any) => {
      t.Logo = t.Logo.formats.thumbnail.url
      return t
    })
    return x
  })
}
