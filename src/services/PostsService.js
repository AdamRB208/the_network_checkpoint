import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { AppState } from "@/AppState.js"


class PostsService {


  async getPosts() {
    const response = await api.get('api/posts')
    logger.log('got posts!', response.data)
    const posts = response.data.posts.map(pojo => new Post(pojo))
    AppState.post = posts
  }

  async createPost(postData) {
    const response = await api.post('api/posts', postData)
    logger.log('created post', response.data)
    const post = new Post(response.data)
    AppState.post.push(post)

  }

  async deletePost(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    logger.log('DELETED POST!', response.data)
    const post = AppState.post
    const postIndex = post.findIndex(post => post.id == postId)
    post.splice(postIndex, 1)
  }

  async changeHomePage(pageNumber) {
    const response = await api.get(`api/posts?page=${pageNumber}`)
    logger.log('changed home page', response.data)
    const post = response.data.posts.map(pojo => new Post(pojo))
    AppState.post = post
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

}

export const postsService = new PostsService()