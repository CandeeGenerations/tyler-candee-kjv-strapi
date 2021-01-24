'use strict'

const {sanitizeEntity} = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByPost(ctx) {
    const {_postId, ...params} = ctx.params
    const entities = await strapi.services.comment.findByPost(_postId, params)

    return entities.map((entity) =>
      sanitizeEntity(entity, {model: strapi.models.comment}),
    )
  },
}
