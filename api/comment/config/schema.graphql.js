module.exports = {
  query: `
    commentsByPost(postId: ID!, sort: String, limit: Int, start: Int, where: JSON, publicationState: PublicationState): [Comment]
  `,
  resolver: {
    Query: {
      commentsByPost: {
        description: 'Return the comments by post ID',
        resolver: 'application::comment.comment.findByPost',
      },
    },
  },
}
