<script setup lang="ts">

import Modal from "@/components/ui/modal/Modal.vue";
import RoundedCircleSpinner from "@/components/ui/spiners/RoundedCircleSpiner.vue";
</script>

<template>
  <Modal>
    <template #window>
      <article class="window">
        <div class="window-head">
          <h2>Пожалуйста, подождите...</h2>
          <p>Ваша фотография обрабатывается</p>
        </div>
        <RoundedCircleSpinner class="window-loader"/>
      </article>
    </template>
  </Modal>
</template>

<style scoped lang="scss">
.window {
  width: 1000px;
  border-radius: 32px;
  padding: 32px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  &-head {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 16px;

    h2 {
      font-weight: bold;
      font-size: 48px;
    }

    p {
      font-weight: 300;
      font-size: 32px;
    }
  }

  &-loader {
    max-width: 120px;
  }
}
</style>