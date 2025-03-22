<script setup>
import { Post } from '@/models/Post.js';



defineProps({
  postProp: { type: Post, required: true }
})

</script>


<template>
  <div class="row">
    <div class="col-md-10">
      <div class="card border-dark mb-3">
        <div>
          <img :src="postProp.creator.picture" alt="profile picture of profile.name" type="button" class="creator-img">
          <span></span>
        </div>
        <img :src="postProp.imgUrl" class="card-img-top" alt="users profile picture">
        <div class="card-body">
          <p class="card-text">{{ postProp.body }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item mdi mdi-heart-outline">{{ postProp.likeIds.length }}</li>
        </ul>
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