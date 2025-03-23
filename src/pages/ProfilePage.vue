<script setup>
import { AppState } from '@/AppState.js';
import PostsCard from '../components/PostsCard.vue';
import { Post } from '@/models/Post.js';
import { Profile } from '@/models/Profile.js';
import { computed } from 'vue';

const posts = computed(() => AppState.post)

defineProps({
  profileProp: { type: Profile, required: true }
})


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
          <p>bio</p>
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
</template>


<style lang="scss" scoped></style>