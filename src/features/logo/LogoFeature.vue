<script setup lang="ts">

import LogoIcon from "@/components/ui/icons/LogoIcon.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const redirectToStandby = () => {
  console.log('click')
  router.push({name: 'standby'})
}
</script>

<template>
  <LogoIcon class="logo" @click="redirectToStandby"/>
</template>

<style scoped lang="scss">
.logo {
  z-index: 1;
  max-width: 200px;
  max-height: 200px;
}
</style>