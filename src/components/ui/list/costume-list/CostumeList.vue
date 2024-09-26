<script setup lang="ts">
import List from '@/components/ui/list/List.vue'
import CostumeCard from '@/components/ui/cards/costume-card/CostumeCard.vue'
import { CostumeItem } from '@/services/costume/index.ts'

type CProps = {
  costumes: CostumeItem[]
}
type CEmits = {
  (_eventName: 'onChoose', _id: number): void
  (_eventName: 'onInfo', _id: number): void
  (_eventName: 'onHideInfo'): void
  (_eventName: 'onPhoto', _id: number): void
}

defineProps<CProps>()
const emits = defineEmits<CEmits>()
const onChoose = (id: number) => emits('onChoose', id)
const onInfo = (id: number) => emits('onInfo', id)
const onHideInfo = () => emits('onHideInfo')
const onPhoto = (id: number) => emits('onPhoto', id)
</script>

<template>
  <List :column-space="32" :columns="1" class="list">
    <CostumeCard
      v-for="item in costumes"
      :image="item.image"
      :title="item.title"
      :description="item.description"
      @click="onChoose(item.id)"
      @on-info="onInfo(item.id)"
      @on-photo="onPhoto(item.id)"
      @on-hide-info="onHideInfo"
    />
  </List>
</template>

<style scoped lang="scss">
.list {
  background-color: #fff;
  border-radius: var(--radius-ml);
}
</style>
