<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  FEmits,
  FProps,
  ShareForm,
} from '@/components/ui/form/share-form/types.ts'
import Input from '@/components/ui/inputs/Input.vue'
import Form from '@/components/ui/form/Form.vue'
import Button from '@/components/ui/button/Button.vue'
import Keyboard from '@/components/ui/keyboard/Keyboard.vue'

defineProps<FProps>()
const emits = defineEmits<FEmits>()

const form = ref<ShareForm>({
  email: {
    ref: null,
    value: '',
    focus: false,
    positionCursorStart: 0,
    positionCursorEnd: 0,
    validPattern: '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$',
    isValid: false,
  },
})

const setEmailFormRef = (element: HTMLElement) => {
  form.value.email.ref = element
}

const onFocusField = (field: keyof ShareForm) => {
  resetFocusForm()
  const startPositionCursor = Number(
    (form.value[field].ref as HTMLInputElement).selectionStart
  )
  const endPositionCursor = Number(
    (form.value[field].ref as HTMLInputElement).selectionEnd
  )
  form.value[field].positionCursorStart = startPositionCursor
  form.value[field].positionCursorEnd = endPositionCursor
  form.value[field].focus = true
}

const onPressKey = (field: keyof ShareForm, value: string) => {
  const targetField = form.value[field]
  targetField.value =
    targetField.value.substring(0, targetField.positionCursorStart) +
    value +
    targetField.value.substring(targetField.positionCursorEnd)
  targetField.positionCursorStart += 1
  targetField.positionCursorEnd += 1
  ;(targetField.ref as HTMLInputElement).setSelectionRange(
    targetField.positionCursorStart,
    targetField.positionCursorEnd
  )
}

const onBackspace = (field: keyof ShareForm) => {
  const targetField = form.value[field]
  const isCorrectlyPosition =
    targetField.value.length == targetField.positionCursorStart ||
    targetField.value.length == targetField.positionCursorEnd
  if (isCorrectlyPosition)
    targetField.value = targetField.value.slice(0, targetField.value.length - 1)
  else {
    const leftValue = targetField.value.slice(
      0,
      targetField.positionCursorStart - 1
    )
    const rightValue = targetField.value.slice(
      targetField.positionCursorStart,
      targetField.value.length
    )
    targetField.value = leftValue + rightValue
    targetField.positionCursorStart -= 1
    targetField.positionCursorEnd -= 1
  }
}

const resetFocusState = (field: keyof ShareForm) => {
  form.value[field].focus = false
}
const resetValueState = (field: keyof ShareForm) => {
  form.value[field].value = ''
}

const resetFocusForm = () => {
  resetFocusState('email')
}

const resetValueForm = () => {
  resetValueState('email')
}

const validFields = (fields: HTMLInputElement[]) => {
  let valid = true
  fields.forEach((field) => {
    const isValid = field.validity.valid
    const fieldName = field.getAttribute('id') as keyof ShareForm
    if (!isValid) {
      form.value[fieldName].isValid = false
      valid = false
    } else {
      form.value[fieldName].isValid = true
    }
  })
  return valid
}

const onSubmit = (_fields: HTMLInputElement[]) => {
  emits('onSend', {
    email: form.value.email.value,
  })
  resetFocusForm()
  resetValueForm()
}

watch(form.value, (value, _oldValue, _onCleanup) => {
  validFields([value.email.ref])
})
</script>

<template>
  <Form class="form" @on-submit="onSubmit" v-outside="resetFocusForm">
    <Input
      id="email"
      v-model="form.email.value"
      :pattern="form.email.validPattern"
      type="text"
      placeholder="email@example.com"
      class="field"
      @click="onFocusField('email')"
      @on-mount="setEmailFormRef"
    />
    <Button
      :disabled="!form.email.isValid"
      :is-loading="isLoading"
      variant="primary"
      type="submit"
      >Отправить
    </Button>
    <Keyboard
      v-if="form.email.focus"
      @on-press="(value) => onPressKey('email', value)"
      @on-backspace="onBackspace('email')"
    />
  </Form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  gap: 16px;

  .field {
    flex: 1 0 458px;
  }
}
</style>
