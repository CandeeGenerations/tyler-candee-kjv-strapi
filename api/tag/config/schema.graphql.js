module.exports = {
  query: `
    tagSlugs(publicationState: PublicationState): [SlugResponse]
  `,
  resolver: {
    Query: {
      tagSlugs: {
        description: 'Return the tag slugs and post counts',
        resolver: 'application::tag.tag.findSlugs',
      },
    },
  },
}
