<script setup>
import { Profile } from '@/models/Profile.js';
import { profilesService } from '@/services/ProfileService.js';


defineProps({
  profileProp: { type: Profile, required: true }
})

// function setActiveProfile(profileId) {
//   profilesService.setActiveProfile(profileId)
// }

</script>


<template>
  <div>Profile details</div>
</template>


<style lang="scss" scoped></style>