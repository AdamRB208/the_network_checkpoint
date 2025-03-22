<script setup>
import { AppState } from './AppState.js';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer class=" text-center">
    Made with <i class="mdi mdi-vuejs text-success"></i> by Adam
  </footer>
</template>

<style lang="scss">
// main {
//   background-color: rgb(209, 215, 215);
// }</style>
