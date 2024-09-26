<script setup lang="ts">
import Alert from '@/components/ui/alert/Alert.vue'
import InfoWhiteFillIcon from '@/components/ui/icons/InfoWhiteFillIcon.vue'

type AEmits = {
  (eventName: 'onClose'): void
}
type AProps = {
  name: string
  info: string
}
defineProps<AProps>()
const emits = defineEmits<AEmits>()
</script>

<template>
  <Alert color="default" class="alert">
    <section>
      <div class="icon">
        <InfoWhiteFillIcon class="icon-info" />
      </div>
      <div class="info">
        <h3>{{ name }}</h3>
        <div v-html="info" />
      </div>
    </section>
  </Alert>
</template>

<style scoped lang="scss">
.alert {
  top: 0;
  padding: 64px;
  width: 100%;
  border-radius: 0 0 64px 64px;
  background-color: #fff;
}

section {
  width: 100%;
  display: flex;
  gap: var(--space-sm);
}

.icon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  max-width: 80px;
  max-height: 80px;
  border-radius: 16px;
  margin-top: 26px;

  &-info {
    width: 48px;
    height: 48px;
    fill: #fff;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  line-height: normal;

  h3 {
    font-size: 96px;
    font-weight: bold;
  }

  div {
    font-weight: 300;
    font-size: 72px;
  }
}
</style>
