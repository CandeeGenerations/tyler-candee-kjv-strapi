module.exports = {
  definition: `
    type SlugResponse {
      id: ID
      slug: String
      postCount: Int
    }
  `,
  query: `
    authorSlugs(publicationState: PublicationState): [SlugResponse]
  `,
  resolver: {
    Query: {
      authorSlugs: {
        description: 'Return the author slugs and post counts',
        resolver: 'application::author.author.findSlugs',
      },
    },
  },
}
