<script setup>
import { AppState } from '@/AppState.js';
import PostsCard from '../components/PostsCard.vue';
import { Post } from '@/models/Post.js';
import { Profile } from '@/models/Profile.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Pop } from '@/utils/Pop.js';
import { logger } from '@/utils/Logger.js';
import { profilesService } from '@/services/ProfilesService.js';
import { postsService } from '@/services/PostsService.js';

defineProps({
  profileProp: { type: Profile, required: true }
})

const posts = computed(() => AppState.post)

const profile = computed(() => AppState.profile)

const route = useRoute()

const currentPage = computed(() => AppState.currentPage)

onMounted(() => {
  getProfileById()
})

watch(route, () => {
  getProfileById()
})

async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profilesService.getProfileById(profileId)
  } catch (error) {
    Pop.error(error, 'Could not get profile by Id')
    logger.error('COULD NOT GET PROFILE BY ID', error)
  }
}

async function getNextPage(pageNumber) {
  try {
    await postsService.changeHomePage(pageNumber)
  } catch (error) {
    Pop.error(error, 'could not get next page')
    logger.error('COULD NOT GET NEXT PAGE', error)
  }
}

</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>name</h1>
        <div>
          <span class="me-3 mb-4">picture</span>
          <span class="mb-4">coverImg</span>
        </div>
        <div>
          <p>email</p>
        </div>
        <div>
          <p></p>
        </div>
        <ul>
          <li>class</li>
          <li>graduated</li>
        </ul>
        <ul>
          <li>github</li>
          <li>linkedin</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="post in posts" :key="post.creatorId" class="col-md-10 d-flex justify-content-center">
        <PostsCard :postProp="post" />
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <button :disabled="currentPage == 1" @click="getNextPage(currentPage - 1)"
        class="col-md-3 btn btn-outline-success mt-2 text-success">
        previous
      </button>
      <div class="col-md-2 text-center align-content-center text-success"> Page {{ currentPage }}
      </div>
      <button :disabled="currentPage == 35" @click="getNextPage(currentPage + 1)"
        class="col-md-3 btn btn-outline-success mt-2 text-success">
        next
      </button>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>