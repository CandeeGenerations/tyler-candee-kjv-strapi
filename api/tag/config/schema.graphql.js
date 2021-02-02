module.exports = {
  query: `
    tagSlugs(sort: String): [SlugResponse]
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
