<script setup lang="ts">

import PhotoCard from "@/components/ui/cards/photo-card/PhotoCard.vue";
import List from "@/components/ui/list/List.vue";
</script>

<template>
  <List :columns="2" :column-space="32" :column-width="438">
    <PhotoCard v-for="item in 15" :key="item"/>
  </List>
</template>

<style scoped lang="scss">

</style>