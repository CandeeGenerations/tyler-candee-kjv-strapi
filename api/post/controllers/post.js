'use strict'

const {sanitizeEntity} = require('strapi-utils')
const {Types} = require('mongoose')

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

  async todaysPosts(ctx) {
    const entities = await strapi.services.post.todaysPosts()

    return entities.map((entity) =>
      sanitizeEntity(entity, {model: strapi.models.post}),
    )
  },

  async copyTags() {
    const entities = await strapi.services.post.find()

    for (const index in entities) {
      const post = entities[index]

      if (!post.tags) {
        post.tags = []
      }

      post.tags.push(Types.ObjectId(post.tag))

      await strapi.services.post.update({id: post.id}, post)
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, {model: strapi.models.post}),
    )
  },
}
