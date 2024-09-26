<script setup lang="ts">
import Image from "@/components/ui/image/Image.vue";
import Video from "@/components/ui/video/Video.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const clickScreen = () => router.push({name: 'person'})
</script>

<template>
  <div class="page" @click="clickScreen">
    <Image href="/images/background-standby.png" class="background"/>
    <section class="page-top"></section>
    <section class="page-center">
      <Video src="/video/nature.mp4" autoplay loop rounded class="video"/>
    </section>
    <section class="page-bottom">
      <Image href="/images/tatarstan.png" class="logo"/>
    </section>
  </div>
</template>

<style scoped lang="scss">
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 1923px;
}

.video {
  max-width: 2032px;
  max-height: 1143px;
  z-index: 1;
}

.page {
  &-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>