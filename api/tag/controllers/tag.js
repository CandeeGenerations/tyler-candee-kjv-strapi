'use strict'

const {sanitizeEntity} = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findSlugs(ctx) {
    const entities = await strapi.services.tag.find(ctx.params)

    return entities.map((entity) => {
      const sEntity = sanitizeEntity(entity, {model: strapi.models.tag})

      return {
        ...sEntity,
        postCount: sEntity.posts.length,
      }
    })
  },
}
