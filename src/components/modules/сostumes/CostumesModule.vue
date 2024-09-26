<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CostumeList from '@/components/ui/list/costume-list/CostumeList.vue'
import CostumeService, { CostumeItem } from '@/services/costume/index.ts'
import ApplicationStateService from '@/services/application-state'

const costumes = ref<CostumeItem[]>([])

const chooseCotume = async (id: number) => {
  await ApplicationStateService.setStateApplication({
    state: 'costume-choose',
    data: {
      id,
    },
  })
}
const getCostumeInfo = async (id: number) => {
  await ApplicationStateService.setStateApplication({
    state: 'costume-info-open',
    data: {
      id,
    },
  })
}
const closeCostumeInfo = async () => {
  await ApplicationStateService.setStateApplication({
    state: 'costume-info-close',
    data: {},
  })
}
onMounted(async () => {
  costumes.value = await CostumeService.getCostumes()
})
</script>

<template>
  <div class="module">
    <h1>Костюмы</h1>
    <CostumeList
      :costumes="costumes"
      class="module-list"
      @on-choose="chooseCotume"
      @on-info="getCostumeInfo"
      @on-hide-info="closeCostumeInfo"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/mixins';

.module {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 952px;

  h1 {
    font-size: 48px;
  }

  &-list {
    padding: 32px;
    max-height: 1693px;
    overflow-y: auto;
    @include no-scroll();
  }
}
</style>
