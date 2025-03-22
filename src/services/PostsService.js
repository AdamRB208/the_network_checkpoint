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
}

export const postsService = new PostsService()