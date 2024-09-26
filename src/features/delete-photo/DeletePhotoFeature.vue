<script setup lang="ts">

import DeleteIcon from "@/components/ui/icons/DeleteIcon.vue";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <Button variant="primary" class="action delete">
    <DeleteIcon class="icon"/>
    <p>Удалить</p>
  </Button>
</template>

<style scoped lang="scss">
.action {
  width: 100%;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  font-size: 48px;

  &.delete {
    border-color: #E30016;
    background-color: #E30016;
  }

  &-icon {
    fill: #fff;
    max-width: 128px;
    max-height: 128px;
  }
}
</style>