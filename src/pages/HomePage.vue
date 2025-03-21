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
      <div class="col-md-9">
        <p>Posts</p>
        <section class="container">
          <div class="row">
            <div v-for="post in posts" :key="post.id" class="col-md-10">
              <PostsCard :postProp="post" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
