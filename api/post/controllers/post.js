'use strict'

const {sanitizeEntity} = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async nextPosts(ctx) {
    const {id} = ctx.params
    const entities = await strapi.services.post.nextPosts(id)

    return entities.map((entity) =>
      sanitizeEntity(entity, {model: strapi.models.post}),
    )
  },
}