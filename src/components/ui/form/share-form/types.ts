import { VNodeRef } from 'vue'

export type FEmits = {
  (eventName: 'onSend', form: { email: string }): void
}
export type FProps = {
  isLoading: boolean
}

export type ShareForm = {
  email: {
    ref: VNodeRef | null
    value: string
    focus: boolean
    positionCursorStart: number
    positionCursorEnd: number
    validPattern: string
    isValid: boolean
  }
}
