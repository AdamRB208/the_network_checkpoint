<script setup>
import { AppState } from '@/AppState.js';
import { Post } from '@/models/Post.js';
import { Profile } from '@/models/Profile.js';
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';



defineProps({
  postProp: { type: Post, required: true },

})
const profile = computed(() => AppState.profile)

const account = computed(() => AppState.account)

async function deletePost(postId) {
  try {
    const confirmed = await Pop.confirm('Are you sure you want to delete this post?', 'It will be gone forever!', 'Yes I am sure', 'Ive changed my mind')
    if (!confirmed) {
      return
    }
    await postsService.deletePost(postId)
  } catch (error) {
    Pop.error(error, 'Could not delete house')
    logger.error('COULD NOT DELETE HOUSE', error)
  }
}

async function likePost(postId) {
  try {
    await postsService.likePost(postId)
  } catch (error) {
    Pop.error(error, 'could not like post')
    logger.error('COULD NOT LIKE POST', error)
  }
}




</script>


<template>
  <div class="row">
    <div class="col-md-10">
      <div class="card border-dark mb-3">
        <div>
          <RouterLink :to="{ name: 'Profile', params: { id: postProp.creatorId } }">
            <img v-if="postProp.creator.coverImg" :src="postProp.creator.coverImg"
              alt="profile picture of ${postProp.creator.name}" :title="postProp.creator.name" type="button"
              class="creator-img">
          </RouterLink>
          <span>{{ postProp.creator.name }}</span>
          <small class="ms-5">{{ postProp.createdAt.toLocaleDateString() }}</small>
        </div>
        <img v-if="postProp.imgUrl" :src="postProp.imgUrl" class="card-img-top" alt="users posted picture">
        <div class="card-body">
          <p class="card-text">{{ postProp.body }}</p>
        </div>
        <div class="list-group list-group-flush">
          <div @click="likePost(postProp.id)" class="list-group-item mdi mdi-heart-outline" type="button">{{
            postProp.likeIds.length
          }}
          </div>
        </div>
        <button v-if="postProp.creatorId == account?.id" @click="deletePost(postProp.id)" class="btn btn-outline-red"
          type="button">
          Delete Post
        </button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card {
  width: 100%;
  border-style: solid;
  border-width: 2px;
  box-shadow: 10px 10px 5px rgb(119, 120, 121);

}

.row {
  width: 100%;
  display: flex;
  justify-content: center;

}

img {
  height: 45dvh;
  object-fit: cover;
}

.creator-img {
  height: 3.7em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin: 5px;
}
</style>