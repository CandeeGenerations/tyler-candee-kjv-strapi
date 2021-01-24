'use strict'

const {Types} = require('mongoose')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  findByPost(postId, params) {
    return strapi
      .query('comment')
      .search({...params, post: {_id: Types.ObjectId(postId)}})
  },
}
