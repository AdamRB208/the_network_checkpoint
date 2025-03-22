<script setup>
import { AppState } from '@/AppState.js';
import { profilesService } from '@/services/ProfileService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';


const profile = computed(() => AppState.activeProfile)

const route = useRoute()

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
    Pop.error(error, 'could not get profile by ID')
    logger.error('COULD NOT GET PROFILE BY ID', error)
  }
}
</script>

<!-- NOTE Review art terminal for details about how to view a users profile.  -->

<template>
  <div>profile page</div>
  <section v-if="profile" class="container">
    <div class="row">
      <div class="col-md-10"></div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>