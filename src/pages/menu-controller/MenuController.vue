<script setup lang="ts">
import Image from '@/components/ui/image/Image.vue'
import CostumesModule from '@/components/modules/сostumes/CostumesModule.vue'
import FlashModule from '@/components/modules/flash/FlashModule.vue'
import PhotoControllerModule from '@/components/modules/photo-controller/PhotoControllerModule.vue'
import AllPhotoModule from '@/components/modules/all-photo/AllPhotoModule.vue'
import SharePhotoModule from '@/components/modules/share-photo/SharePhotoModule.vue'
</script>

<template>
  <div class="page">
    <Image href="/images/background-controller.png" class="background" />
    <section class="page-top"></section>
    <section class="page-center">
      <CostumesModule />
<!--      <FlashModule />-->
<!--      <PhotoControllerModule />-->
<!--      <AllPhotoModule />-->
      <!--      <SharePhotoModule />-->
    </section>
    <section class="page-bottom"></section>
  </div>
</template>

<style scoped lang="scss">
.background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.page {
  color: #fff;
  background-color: var(--fourth-color);

  &-top {
    flex: 1 0 10vh;
  }

  &-center {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  &-bottom {
    flex: 1 0 10vh;
  }
}
</style>
