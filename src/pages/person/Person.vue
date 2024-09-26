<script setup lang="ts">
import Image from '@/components/ui/image/Image.vue'
import LogoFeature from '@/features/logo/LogoFeature.vue'
import { useApplicationStore } from '@/stores/app.store.ts'
import { useStateStore } from '@/stores/state.store.ts'
import { computed, ref, watch } from 'vue'
import CostumeService, { CostumeItem } from '@/services/costume/index.ts'

const applicationStore = useApplicationStore()
const stateApplication = useStateStore()
const costume = ref<CostumeItem | null>(null)
const state = computed(() => stateApplication.getState())
const baseUrl = window.API

watch(state, (value) => {
  if (value.state == 'costume-info-open') openCostumeInfo(state.value.data.id!)
  else if (value.state === 'costume-info-close') closeCostumeInfo()
  else if (value.state === 'costume-choose') changeCostume(state.value.data.id!)
})

const changeCostume = async (costumeId: number) => {
  costume.value = await CostumeService.getCostume(costumeId)
}

const openCostumeInfo = async (id: number) => {
  await CostumeService.getCostume(id).then((costume) => {
    applicationStore
      .getAlert('info-person')
      ?.setSettings({
        name: costume.title,
        info: costume.description,
      })
      ?.onShow()
  })
}

const closeCostumeInfo = () => {
  applicationStore.getAlert('info-person')?.setSettings({}).onHide()
}

// applicationStore.getModal('wait-load')?.onShow()
</script>

<template>
  <div class="page">
    <section class="page-top">
      <LogoFeature />
    </section>
    <section class="page-center">
      <Image :href="baseUrl + costume?.imagePreviews" class="background" />
    </section>
    <section class="page-bottom"></section>
  </div>
</template>

<style scoped lang="scss">
.background {
  position: absolute;
  top: 164px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 2032px;
  height: 3612px;
}

.page {
  &-top {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.person {
  &-name {
    position: absolute;
    z-index: 2;
    color: #fff;
    text-align: center;
    font-size: 300px;
  }
}
</style>
