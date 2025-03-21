<script setup>
import { Post } from '@/models/Post.js';


defineProps({
  postProp: { type: Post, required: true }
})

</script>


<template>
  <div class="card d-flex justify-content-center mb-3" style="width: 18rem;">
    <img :src="postProp.imgUrl" class="card-img-top" alt="users profile picture">
    <div class="card-body">
      <p class="card-text">{{ postProp.body }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item mdi mdi-heart-outline">{{ postProp.likeIds.length }}</li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
card {
  object-fit: cover;
  border-style: solid;
  border-width: thick;
}

img {
  border-radius: 50;

}
</style>