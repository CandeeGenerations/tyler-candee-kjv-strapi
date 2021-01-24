module.exports = {
  query: `
    sermonsCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      sermonsCount: {
        description: 'Return the count of sermons',
        resolverOf: 'application::sermon.sermon.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.sermon.services.sermon.count(
            options.where || {},
          )
        },
      },
    },
  },
}
