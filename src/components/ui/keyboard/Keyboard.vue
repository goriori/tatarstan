<script setup lang="ts">
import {computed, ref} from 'vue'
import BackspaceIcon from '@/components/ui/icons/BackspaceIcon.vue'
import {KEmits} from "@/components/ui/keyboard/types.ts";


const keysRu = ref([
  ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '<='],
  ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['&123', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ENG'],
  ['@mail.ru', 'space', '@gmail.com'],
])

const keysEn = ref([
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '<='],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '`', 'Enter'],
  ['&123', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'RU'],
  ['@mail.ru', 'space', '@gmail.com'],
])

const keyNums = ref([
  ['1', '2', '3', '!', '@', '<='],
  ['4', '5', '6', '$', '%', '^'],
  ['7', '8', '9', '&', '*', '('],
  ['ABC', '0', '#', '_', '=', ')'],
])

const lang = ref<string>('RU')
const shift = ref<boolean>(false)

const targetKeys = computed(() => {
  if (lang.value === 'RU') return keysRu.value
  else if (lang.value === 'ENG') return keysEn.value
  else if (lang.value === '&123') return keyNums.value
  return keysRu.value
})

const emits = defineEmits<KEmits>()
const changeLanguage = (newLang: string) => (lang.value = newLang)
const changeShift = () => (shift.value = !shift.value)
const onEnter = () => emits('onEnter')
const onBackspace = () => emits('onBackspace')
const onKey = (key: string, shift: boolean) => {
  if (shift) emits('onPress', key.toUpperCase())
  else emits('onPress', key.toLowerCase())
}
const onPressKey = (key: string) => {
  switch (key) {
    case 'Enter':
      onEnter()
      break
    case 'ENG':
      changeLanguage('ENG')
      break
    case 'RU':
      changeLanguage('RU')
      break
    case '&123':
      changeLanguage('&123')
      break
    case 'ABC':
      changeLanguage('ENG')
      break
    case 'shift':
      changeShift()
      break
    case '<=':
      onBackspace()
      break
    case 'space':
      onKey(' ', shift.value)
      break
    case '@mail.ru':
      onKey('@mail.ru', false)
      break
    case '@gmail.com':
      onKey('@gmail.com', false)
      break
    default:
      onKey(key, shift.value)
  }
}
</script>

<template>
  <div :class="{ 'keyboard-shifted': shift }" class="keyboard keyboard__block">
    <div class="keyboard__row" v-for="(row, index) in targetKeys" :key="index">
      <div
          v-for="key in row"
          :key="key"
          v-ripple
          :class="[
          'keyboard__btn',
          {
            space: key === 'space',
            action:key === '&123' || key === 'Enter' || key === 'ENG' || key === 'RU' || key === '@mail.ru' ,
            shortcut: key === '@gmail.com' || key === '@mail.ru'
          },
        ]"
          @click="onPressKey(key)"
      >
        <BackspaceIcon v-if="key === '<='"/>
        <p v-if="key !== 'space' && key !== '<='">{{ key }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.keyboard {
  position: absolute;
  z-index: 1000000;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);

  &-shifted {
    text-transform: uppercase;
  }

  &__block {
    width: 100%;
    max-width: 850px;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: #fff;
  }

  &__row {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  &__btn {
    user-select: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: OpenSans, serif;
    background-color: #FAFAFA;
    color: #000;
    font-weight: 500;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    &.big {
      width: 150px;
    }

    &.space {
      width: 100%;
      max-width: 505px;
    }

    &.shortcut {
      width: 100%;
      max-width: 155px;
    }

    &.action {
      width: 100%;
      max-width: 92px;
    }
  }
}

.keyboard .active {
  background-color: #ddd;
}

.shift-active {
  fill: #000;
}

.shift {
  margin-right: 5px;
}
</style>
