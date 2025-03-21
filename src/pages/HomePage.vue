<script setup>
import { AppState } from '@/AppState.js';
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js'; ``
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import PostsCard from '../components/PostsCard.vue';



const posts = computed(() => AppState.post)

onMounted(() => {
  getPosts()
})

async function getPosts() {
  try {
    await postsService.getPosts()
  } catch (error) {
    Pop.error(error, 'Could not get posts')
    logger.error('COULD NOT GET POSTS', error)
  }
}


</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12 fs-1 d-flex justify-content-center">
        <p>Posts</p>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div class="col-md-10">
        <form class="row g-3">
          <div>
            <img src="" alt="">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Post Something Here!</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-primary mb-3 mdi mdi-draw-pen">Post</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-md-10 d-flex justify-content-center">
        <PostsCard :postProp="post" />
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
section {
  background-color: rgb(123, 249, 123);
}
</style>
