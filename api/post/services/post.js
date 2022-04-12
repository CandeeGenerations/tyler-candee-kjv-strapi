'use strict'

const {Types} = require('mongoose')
const _ = require('lodash')
const dayjs = require('dayjs')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async nextPosts(postId) {
    // get the current posts (for the author ID)
    const post = await strapi
      .query('post')
      .findOne({_id: Types.ObjectId(postId)})

    // get all posts by author ID
    const allPosts = await strapi.query('post').search({
      _sort: 'date:desc',
      secret: false,
      author: {_id: Types.ObjectId(post.author._id)},
    })
    const postsLength = allPosts.length

    // there is only one post
    if (postsLength === 1) {
      return [] // no other posts to show
    }

    // there are only two posts
    if (postsLength === 2) {
      return allPosts[1] // only show the other post
    }

    // there are more than two posts
    // get the current position in the array
    const postIndex = _.findIndex(allPosts, (post) => post.id === postId)

    // if the current post is the second to last post
    if (postIndex === postsLength - 2) {
      // return the last and first posts
      return [allPosts[postsLength - 1], allPosts[0]]
    }

    // if the current post is the last post
    if (postIndex === postsLength - 1) {
      // return the first two posts
      return _.slice(allPosts, 0, 2)
    }

    // return the next two posts
    return _.slice(allPosts, postIndex + 1, postIndex + 3)
  },

  async todaysPosts() {
    return await strapi.query('post').search({
      _sort: 'date:desc',
      secret: false,
      published_at_null: false,
      date_gt: dayjs().startOf('day').format(),
      date_lt: dayjs().endOf('day').format(),
    })
  },
}
