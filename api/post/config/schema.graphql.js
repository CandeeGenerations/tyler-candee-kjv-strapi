module.exports = {
  query: `
    postsCount(where: JSON): Int!
    nextPosts(id: ID!): [Post]
    todaysPosts: [Post]
  `,
  resolver: {
    Query: {
      postsCount: {
        description: 'Return the count of posts',
        resolverOf: 'application::post.post.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.post.services.post.count(options.where || {})
        },
      },

      nextPosts: {
        description: 'Return the next 2 posts',
        resolver: 'application::post.post.nextPosts',
      },

      todaysPosts: {
        description: "Return today's posts",
        resolver: 'application::post.post.todaysPosts',
      },
    },
  },
}
