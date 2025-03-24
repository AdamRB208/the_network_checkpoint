<script setup>
import { AppState } from '@/AppState.js';
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js'; ``
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';
import PostsCard from '../components/PostsCard.vue';



const posts = computed(() => AppState.post)

const currentPage = computed(() => AppState.currentPage)

const totalPages = computed(() => AppState.totalPages)


onMounted(() => {
  getPosts()
})


const editablePostData = ref({
  body: '',
  imgUrl: ''
})

async function getPosts() {
  try {
    await postsService.getPosts()
  } catch (error) {
    Pop.error(error, 'Could not get posts')
    logger.error('COULD NOT GET POSTS', error)
  }
}

async function createPost() {
  try {
    const postData = editablePostData.value
    await postsService.createPost(postData)
  } catch (error) {
    Pop.error(error, 'Could not create post')
    logger.error('COULD NOT CREATE POST', error)
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
      <div class="col-12 fs-1 d-flex justify-content-center">
        <p>Posts</p>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div class="col-md-10">
        <form @submit.prevent="createPost()" class="row mb-3">
          <div>
            <img src="" alt="">
          </div>
          <div class="mb-3">
            <label for="body" class="form-label">Post Something Here!</label>
            <textarea v-model="editablePostData.body" class="form-control" id="body" name="body" type="text"
              placeholder="..." maxlength="5000" required>...</textarea>
          </div>
          <div class="mb-3">
            <label for="imgUrl" class="me-3">Post An Image</label>
            <input v-model="editablePostData.imgUrl" id="houseImgUrl" name="houseImgUrl" type="url" maxlength="500"
              placeholder="Image URL..." class="">
          </div>
          <div>
            <button type="submit" class="btn btn-primary mb-3 mdi mdi-lead-pencil fs-5">Post</button>
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

<style scoped lang="scss">
form {
  border-style: solid;
  border-width: 2px;
  box-shadow: 10px 10px 5px rgb(119, 120, 121);
}
</style>
