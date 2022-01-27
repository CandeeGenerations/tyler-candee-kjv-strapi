module.exports = {
  query: `
    resourceCount: Int!
  `,
  resolver: {
    Query: {
      resourceCount: {
        description: 'Return the count of resources',
        resolverOf: 'application::resource.resource.count',
        resolver: async () => {
          return await strapi.api.resource.services.resource.count()
        },
      },
    },
  },
}
