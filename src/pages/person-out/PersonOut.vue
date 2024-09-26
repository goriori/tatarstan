<script setup lang="ts">
import Image from '@/components/ui/image/Image.vue'
import LogoFeature from '@/features/logo/LogoFeature.vue'
import { useApplicationStore } from '@/stores/app.store.ts'

const applicationStore = useApplicationStore()
// applicationStore.getAlert('info-person')?.setSettings({
//   name: 'Оператор АЗС',
//   info: 'Нефтяник будущего – это фантазийный персонаж, который представляет собой высококлассного специалиста в разных\n' +
//       '          отраслях нефтяной промышленности. Процессом нефтедобычи управляет при помощи современной электронной техники и\n' +
//       '          специально созданного программного обеспечения. Добыча нефти осуществляется не только из земных недр, но и на\n' +
//       '          различных космических объектах, таких как астероиды, малые планеты и др., которые богаты природными\n' +
//       '          ископаемыми.'
// })?.onShow()

// applicationStore.getModal('wait-load')?.onShow()
</script>

<template>
  <div class="page">
    <section class="page-top">
      <LogoFeature />
    </section>
    <section class="page-center">
      <h1 class="person-name">Геолого - разведчик</h1>
      <Image href="/images/subtract.png" class="background" />
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
